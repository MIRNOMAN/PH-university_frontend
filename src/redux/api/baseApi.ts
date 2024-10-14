import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});

const beseQuerywithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error(result?.error?.data?.message);
  }

  if (result?.error?.status === 403) {
    toast.error(result?.error?.data?.message);
  }
  // Check if the request failed due to an expired token
  if (result?.error?.status === 401) {
    // Attempt to refresh the token
    const refreshResult = await fetch(
      "http://localhost:5000/api/v1/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await refreshResult.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: beseQuerywithRefreshToken,
  tagTypes: ['semester', 'courses', 'offeredCourse'],
  endpoints: () => ({}),
});

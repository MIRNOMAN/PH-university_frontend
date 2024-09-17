import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setUser } from "../features/auth/authSlice";

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

const beseQuerywithRefreshToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
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

    const user = (api.getState() as RootState).auth.user;

    api.dispatch(
      setUser({
        user,
        token: data.data.accessToken,
      })
    );
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: beseQuerywithRefreshToken,
  endpoints: () => ({}),
});

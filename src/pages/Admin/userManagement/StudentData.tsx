import { useState } from "react";
import { TStudent } from "../../../types/userManagement.type";
import { TQueryParam } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";

export type TTableData = Pick<
  TStudent,
  'fullName' | 'id' | 'email' | 'contactNo'
>;  

const StudentData = () => {
    const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    { name: 'page', value: page },
    { name: 'sort', value: 'id' },
    ...params,
  ]);

  console.log({ isLoading, isFetching });

  const metaData = studentData?.meta;

  const tableData = studentData?.data?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
    })
  );
    return (
        <div>
            <h1>stdent data</h1>
        </div>
    );
};

export default StudentData;
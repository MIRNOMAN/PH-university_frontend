import { useState } from "react";
import { TStudent } from "../../../types/userManagement.type";
import { TQueryParam } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { Button, Space, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

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

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'fullName',
    },

    {
      title: 'Roll No.',
      key: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Contact No.',
      key: 'contactNo',
      dataIndex: 'contactNo',
    },
    {
      title: 'Action',
      key: 'x',
      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Link to={`/admin/student-data/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: '1%',
    },
  ];

    return (
        <div>
            <h1>stdent data</h1>
        </div>
    );
};

export default StudentData;
import { Table } from "antd";
import { useAddFacultiesMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagementApi";
import { useState } from "react";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";


const Courses = () => {
    const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);

    const tableData = courses?.data?.map(({ _id, title, prefix, code }) => ({
      key: _id,
      title,
      code: `${prefix}${code}`,
    }));
  
    const columns = [
      {
        title: 'Title',
        key: 'title',
        dataIndex: 'title',
      },
      {
        title: 'Code',
        key: 'code',
        dataIndex: 'code',
      },
      {
        title: 'Action',
        key: 'x',
        render: (item) => {
          return <AddFacultyModal facultyInfo={item} />;
        },
      },
    ];

     // const onChange: TableProps<TTableData>['onChange'] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === 'filter') {
  //     const queryParams: TQueryParam[] = [];
  //     setParams(queryParams);
  //   }
  // };

    return (
        <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        // onChange={onChange}
      />
    );
};



const AddFacultyModal = ({ facultyInfo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
    const [addFaculties] = useAddFacultiesMutation();
  
    const facultiesOption = facultiesData?.data?.map((item) => ({
      value: item._id,
      label: item.fullName,
    }));

    const handleSubmit = (data) => {
        const facultyData = {
          courseId: facultyInfo.key,
          data,
        };
    
        console.log(facultyData);
    
        addFaculties(facultyData);
      };
    
      const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

export default Courses;
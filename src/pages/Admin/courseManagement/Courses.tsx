import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagementApi";


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
    return (
        <div>
             <h1>this is course</h1>
        </div>
    );
};

export default Courses;
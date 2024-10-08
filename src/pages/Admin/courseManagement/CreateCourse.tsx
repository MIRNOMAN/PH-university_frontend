import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagementApi";

const CreateCourse = () => {
    const [createCourse] = useAddCourseMutation();
    const { data: courses } = useGetAllCoursesQuery(undefined);
  
    const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
      value: item._id,
      label: item.title,
    }));
    return (
        <div>
            <h1>this is create course</h1>
        </div>
    );
};

export default CreateCourse;
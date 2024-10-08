import { toast } from "sonner";
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagementApi";
import { TResponse } from "../../../types/global";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateCourse = () => {
    const [createCourse] = useAddCourseMutation();
    const { data: courses } = useGetAllCoursesQuery(undefined);
  
    const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
      value: item._id,
      label: item.title,
    }));

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...');
    
        const courseData = {
          ...data,
          code: Number(data.code),
          credits: Number(data.credits),
          isDeleted: false,
          preRequisiteCourses: data.preRequisiteCourses
            ? data.preRequisiteCourses?.map((item) => ({
                course: item,
                isDeleted: false,
              }))
            : [],
        };
    
        console.log(courseData);
    
        try {
          const res = (await createCourse(courseData)) as TResponse<any>;
          console.log(res);
          if (res.error) {
            toast.error(res.error.data.message, { id: toastId });
          } else {
            toast.success('Semester created', { id: toastId });
          }
        } catch (err) {
          toast.error('Something went wrong', { id: toastId });
        }
      };
    return (
        <div>
            <h1>this is create course</h1>
        </div>
    );
};

export default CreateCourse;
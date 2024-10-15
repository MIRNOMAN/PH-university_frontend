import { useNavigate } from "react-router-dom";
import { useGetAllFacultyCoursesQuery } from "../../redux/features/faculty/facultyCourses.api";
import { FieldValues, SubmitHandler } from "react-hook-form";


export const MyCourses = () => {
    const { data: facultyCoursesData } = useGetAllFacultyCoursesQuery(undefined);
    const navigate = useNavigate();

    const semesterOptions = facultyCoursesData?.data?.map((item) => ({
        label: `${item.academicSemester.name} ${item.academicSemester.year}`,
        value: item.semesterRegistration._id,
      }));
    
      const courseOptions = facultyCoursesData?.data?.map((item) => ({
        label: item.course.title,
        value: item.course._id,
      }));
    
  
    console.log(facultyCoursesData);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        navigate(`/faculty/courses/${data.semesterRegistration}/${data.course}`);
      };
    
  return (
    <div>MyCourses</div>
  )
}

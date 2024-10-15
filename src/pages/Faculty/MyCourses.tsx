import { useNavigate } from "react-router-dom";
import { useGetAllFacultyCoursesQuery } from "../../redux/features/faculty/facultyCourses.api";


export const MyCourses = () => {
    const { data: facultyCoursesData } = useGetAllFacultyCoursesQuery(undefined);
    const navigate = useNavigate();
  
    console.log(facultyCoursesData);
  return (
    <div>MyCourses</div>
  )
}

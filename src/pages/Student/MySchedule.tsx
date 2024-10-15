import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";


export const MySchedule = () => {
    const { data } = useGetAllEnrolledCoursesQuery(undefined);
  console.log(data);
  return (
    <div>MySchedule</div>
  )
}

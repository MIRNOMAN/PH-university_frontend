import { useEnrolCourseMutation, useGetAllOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

type TCourse = {
  [index: string]: any;
};

const StudentOfferedCourse = () => {
  const { data: offeredCourseData } = useGetAllOfferedCoursesQuery(undefined);
  const [enroll] = useEnrolCourseMutation();

  const singleObject = offeredCourseData?.data?.reduce((acc: TCourse, item) => {
    const key = item.course.title;
    acc[key] = acc[key] || { courseTitle: key, sections: [] };
    acc[key].sections.push({
      section: item.section,
      _id: item._id,
      days: item.days,
      startTime: item.startTime,
      endTime: item.endTime,
    });
    return acc;
  }, {});

  return (
    <div>
      <h1>This is student offered course</h1>
    </div>
  );
};

export default StudentOfferedCourse;

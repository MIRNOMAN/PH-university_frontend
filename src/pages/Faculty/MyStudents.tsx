import { useParams } from "react-router-dom";
import { useGetAllFacultyCoursesQuery } from "../../redux/features/faculty/facultyCourses.api";
import { Table } from "antd";


export const MyStudents = () => {
  const { registerSemesterId, courseId } = useParams();
  const { data: facultyCoursesData } = useGetAllFacultyCoursesQuery([
    { name: 'semesterRegistration', value: registerSemesterId },
    { name: 'course', value: courseId },

  ]);


  console.log(facultyCoursesData);

    const tableData = facultyCoursesData?.data?.map(
      ({ _id, student, semesterRegistration, offeredCourse }) => ({
        key: _id,
        name: student.fullName,
        roll: student.id,
        semesterRegistration: semesterRegistration._id,
        student: student._id,
        offeredCourse: offeredCourse._id,
      })
    );
  
    const columns = [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
      },
      {
        title: 'Roll',
        key: 'roll',
        dataIndex: 'roll',
      },
      {
        title: 'Action',
        key: 'x',
        render: (item) => {
          return (
            <div>
              <AddMarksModal studentInfo={item} />
            </div>
          );
        },
      },
    ];
  return (
    <Table columns={columns} dataSource={tableData} />
  )
}



const AddMarksModal = ({ studentInfo }) => {
  console.log(studentInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addMark] = useAddMarkMutation();

  const handleSubmit = async (data) => {
    const studentMark = {
      semesterRegistration: studentInfo.semesterRegistration,
      offeredCourse: studentInfo.offeredCourse,
      student: studentInfo.student,
      courseMarks: {
        classTest1: Number(data.classTest1),
        midTerm: Number(data.midTerm),
        classTest2: Number(data.classTest2),
        finalTerm: Number(data.finalTerm),
      },
    };
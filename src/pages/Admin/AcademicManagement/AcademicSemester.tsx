import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/AcademicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is academic semester components</h1>
    </div>
  );
};

export default AcademicSemester;

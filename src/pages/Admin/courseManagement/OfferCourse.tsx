import { useState } from "react";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi";
import { FieldValues, SubmitHandler } from "react-hook-form";


const OfferCourse = () => {
    const [id, setId] = useState('');

  console.log('Inside parent component', id);

  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);

  const academicSemesterOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
    return (
        <div>
               <h1>this is offer course</h1>
        </div>
    );
};

export default OfferCourse;
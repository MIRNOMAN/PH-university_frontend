import { useState } from "react";
import { useGetAllRegisteredSemestersQuery, useUpdateRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagementApi";


const items = [
    {
      label: 'Upcoming',
      key: 'UPCOMING',
    },
    {
      label: 'Ongoing',
      key: 'ONGOING',
    },
    {
      label: 'Ended',
      key: 'ENDED',
    },
  ];

const RegisteredSemesters = () => {
    const [semesterId, setSemesterId] = useState('');
    const { data: semesterData, isFetching } =
      useGetAllRegisteredSemestersQuery(undefined);
  
    const [updateSemesterStatus] = useUpdateRegisteredSemesterMutation();
  
    console.log(semesterId);
  
    return (
        <div>
             <h1>this is Registered Semesters</h1>
        </div>
    );
};

export default RegisteredSemesters;
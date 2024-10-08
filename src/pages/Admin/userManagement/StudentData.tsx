import { TStudent } from "../../../types/userManagement.type";

export type TTableData = Pick<
  TStudent,
  'fullName' | 'id' | 'email' | 'contactNo'
>;  

const StudentData = () => {
    return (
        <div>
            <h1>stdent data</h1>
        </div>
    );
};

export default StudentData;
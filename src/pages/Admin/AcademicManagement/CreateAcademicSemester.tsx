import { Button } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";

const CreateAcademicSemester = () => {
  const onsubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <form>
      <PHForm onSubmit={onsubmit}>
        <PHInput type="text" name="name" />
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </form>
  );
};

export default CreateAcademicSemester;

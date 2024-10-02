import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicSemester = () => {
  const onsubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <form>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm onSubmit={onsubmit}>
            <PHSelect label="Name" name="name" />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </form>
  );
};

export default CreateAcademicSemester;

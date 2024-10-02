import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { SemesterOptions } from "../../../constants/semesters";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onsubmit: SubmitErrorHandler<FieldValues> = (data) => {
    const name = SemesterOptions[Number(data.name) - 1].label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onsubmit}>
          <PHSelect label="Name" name="name" options={SemesterOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startmonth"
            options={yearOptions}
          />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;

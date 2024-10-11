import { useState } from "react";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import PHInput from "../../../components/form/PHInput";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagementApi";


const OfferCourse = () => {
  const [courseId, setCourseId] = useState('');

  const [addOfferedCourse] = useCreateOfferedCourseMutation();

  const { data: semesterRegistrationData } = useGetAllRegisteredSemestersQuery([
    { name: 'sort', value: 'year' },
    { name: 'status', value: 'UPCOMING' },
  ]);


    return (
        <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelectWithWatch
            onValueChange={setId}
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />
          <PHInput disabled={!id} type="text" name="test" label="Test" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
    );
};

export default OfferCourse;
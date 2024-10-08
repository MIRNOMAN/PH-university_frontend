

const SemesterRegistration = () => {
    const [addSemester] = useAddRegisteredSemesterMutation();
    const { data: academicSemester } = useGetAllSemestersQuery([
      { name: 'sort', value: 'year' },
    ]);
  
    const academicSemesterOptions = academicSemester?.data?.map((item) => ({
      value: item._id,
      label: `${item.name} ${item.year}`,
    }));
    return (
        <div>
                <h1>this is Semester Registration</h1>
        </div>
    );
};

export default SemesterRegistration;
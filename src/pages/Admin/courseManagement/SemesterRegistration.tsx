import { toast } from "sonner";


const SemesterRegistration = () => {
    const [addSemester] = useAddRegisteredSemesterMutation();
    const { data: academicSemester } = useGetAllSemestersQuery([
      { name: 'sort', value: 'year' },
    ]);
  
    const academicSemesterOptions = academicSemester?.data?.map((item) => ({
      value: item._id,
      label: `${item.name} ${item.year}`,
    }));


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...');
    
        const semesterData = {
          ...data,
          minCredit: Number(data.minCredit),
          maxCredit: Number(data.maxCredit),
        };
    
        console.log(semesterData);
    
        try {
          const res = (await addSemester(semesterData)) as TResponse<any>;
          console.log(res);
          if (res.error) {
            toast.error(res.error.data.message, { id: toastId });
          } else {
            toast.success('Semester created', { id: toastId });
          }
        } catch (err) {
          toast.error('Something went wrong', { id: toastId });
        }
      };
    return (
        <div>
                <h1>this is Semester Registration</h1>
        </div>
    );
};

export default SemesterRegistration;
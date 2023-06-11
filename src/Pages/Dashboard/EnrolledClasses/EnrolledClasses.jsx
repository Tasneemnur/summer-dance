import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import Title from "../../../Shared/Title/Title";

const EnrolledClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(enrolledClasses);
  return (
    <div className="pb-10">
    <Title heading="Enrolled Classes" subHeading="You successfully enroll to these classes"></Title>
    <div className="grid grid-cols-2 gap-4">
      {enrolledClasses.map((enrolledClass) => (
        <div key={enrolledClass._id} className="card w-80 h-64 bg-base-100 shadow-xl image-full">
          <figure>
            <img
            className="w-full"
              src={enrolledClass.classImage}
              alt=""
            />
          </figure>
          <div className="card-body flex justify-center flex-col items-center">
            <h2 className="text-white text-4xl mt-12 font-bold">{enrolledClass.className}</h2>
            <p className="text-xl font-bold">Taken By <span className="text-orange-600">{enrolledClass.instructorName}</span></p>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default EnrolledClasses;

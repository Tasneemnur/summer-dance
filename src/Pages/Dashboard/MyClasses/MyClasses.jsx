import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import Title from "../../../Shared/Title/Title";

const MyClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(classes);
  return (
    <div>
        <Title heading="My Classes" subHeading="These are the classes that you added"></Title>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class name</th>
              <th>Status</th>
              <th>Students</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((danceClass, index) => (
              <tr key={danceClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={danceClass.classImage} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{danceClass.className}</td>
                <td>{danceClass.status}</td>
                <td>{danceClass.enrolled ? danceClass.enrolled : 0}</td>
                <td>{danceClass.feedback ? danceClass.feedback : ""}</td>
                <td>
                  <button className="btn bg-orange-600 hover:bg-orange-700 text-white btn-xs">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;

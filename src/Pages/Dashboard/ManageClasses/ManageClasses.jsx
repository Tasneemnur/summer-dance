import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure("/classes");
    return res.data;
  });
  return (
    <div className="">
      <table className="table text-center">
        <thead>
          <tr>
            <th>Class</th>
            <th>Class name</th>
            <th>Instructor name</th>
            <th>Instructor email</th>
            <th>Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((danceClass) => (
            <tr key={danceClass._id}>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={danceClass.classImage} alt="" />
                  </div>
                </div>
              </td>
              <td>{danceClass.className}</td>
              <td>{danceClass.instructorName}</td>
              <td>{danceClass.instructorEmail}</td>
              <td>{danceClass.availableSeats}</td>
              <td className="text-right">{danceClass.price}</td>
              <td>{danceClass.status}</td>
              <td><button className="btn btn-xs rounded-md me-2 bg-orange-600 text-white mb-2 hover:bg-blue-950">Approve</button>
              <button className="btn btn-xs rounded-md me-2 bg-orange-600 text-white mb-2 hover:bg-blue-950">Deny</button>
              <button className="btn btn-xs rounded-md me-2 bg-orange-600 text-white hover:bg-blue-950">feedback</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;

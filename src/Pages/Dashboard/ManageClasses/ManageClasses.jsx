import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure("/classes");
    return res.data;
  });
  const handleApprove = (danceClass) => {
    fetch(`http://localhost:5000/classes/approved/${danceClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class is Approved.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (danceClass) => {
    fetch(`http://localhost:5000/classes/denied/${danceClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class is Denied.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
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
              <td>
                <button
                  disabled={
                    danceClass.status === "Approved" ||
                    danceClass.status === "Denied"
                  }
                  onClick={() => handleApprove(danceClass)}
                  className="btn btn-xs rounded-md me-2 bg-orange-600 text-white mb-2 hover:bg-blue-950"
                >
                  Approve
                </button>
                <button
                  disabled={
                    danceClass.status === "Approved" ||
                    danceClass.status === "Denied"
                  }
                  onClick={() => handleDeny(danceClass)}
                  className="btn btn-xs rounded-md me-2 bg-orange-600 text-white mb-2 hover:bg-blue-950"
                >
                  Deny
                </button>
                <Link to={`/dashboard/feedback/${danceClass._id}`}><button
                  className="btn btn-xs rounded-md me-2 bg-orange-600 text-white mb-2 hover:bg-blue-950"
                >
                  feedback
                </button></Link>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;

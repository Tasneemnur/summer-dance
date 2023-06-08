import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [disable, setDisable] = useState(false);
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an instructor now.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setDisable(true);
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin"
                    ? "admin"
                    : user.role === "instructor"
                    ? "instructor"
                    : "student"}
                </td>
                <td className="flex">
                  <button
                    disabled={user.role === "instructor"}
                    onClick={() => handleMakeInstructor(user)}
                    className="btn btn-xs rounded-md me-2 bg-orange-600 text-white"
                  >
                    Instructor
                  </button>
                  <button
                    disabled={user.role === "admin"}
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-xs rounded-md bg-orange-600 text-white"
                  >
                    Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

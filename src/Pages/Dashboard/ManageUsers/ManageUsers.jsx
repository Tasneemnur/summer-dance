import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an admin now.`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

  }
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
            {
                users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : 'student' }</td>
                <td><button onClick={() => handleMakeInstructor(user)} className="badge badge-outline me-3">Instructor</button><button className="badge badge-outline">Admin</button></td>
              </tr>)
            } 
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

import useCart from "../../../hooks/useCart/useCart";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Title from "../../../Shared/Title/Title";

const SelectedClasses = () => {
  const [cart, refetch] = useCart();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
        <Title heading="Selected Classes" subHeading="These are the classes that you select. Manage your selected classes"></Title>
      <div className="overflow-x-auto mt-16">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Class</th>
              <th>Class name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((eachClass, index) => (
              <tr key={eachClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={eachClass.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{eachClass.className}</td>
                <td>{eachClass.instructorName}</td>
                <td className="text-right">{eachClass.price}</td>
                <td className="flex items-center">
                  <button
                    onClick={() => handleDelete(eachClass._id)}
                    className="btn btn-ghost text-red-600 text-2xl"
                  >
                    <MdDelete></MdDelete>
                  </button>
                  <Link to={`/dashboard/payment/${eachClass._id}`}><button className="btn bg-orange-600 hover:bg-orange-700 btn-sm text-white">pay</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;

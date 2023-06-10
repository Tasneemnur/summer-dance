import { useContext } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import useInstructor from "../../hooks/useInstructor/useInstructor";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart/useCart";

const DanceClass = ({ item }) => {
  const { _id, classImage, className, instructorName, availableSeats, price } =
    item;
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const seats = parseInt(availableSeats);
  const fees = parseFloat(price);

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cart = {
        classId: _id,
        classImage,
        className,
        instructorName,
        availableSeats,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "This dance class added to your cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You have to login first",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div
      className={`card ${
        seats === 0 ? "bg-red-700" : "bg-base-100"
      } w-full  shadow-xl`}
    >
      <figure>
        <img src={classImage} className="w-96 h-60" alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title text-blue-950 text-2xl font-bold">
            {className}
          </h2>
          <p className="text-orange-600 mb-2 text-sm font-semibold">
            {instructorName}
          </p>
        </div>
        <div className="md:flex">
          <p className="text-neutral-500 text-sm font-semibold">
            Available Seats: {seats}
          </p>
          <p className="text-neutral-500 text-sm font-semibold md:ms-16">
            Price: ${fees}
          </p>
        </div>
        <div className="card-actions justify-center mt-5">
          <button
            onClick={() => handleAddToCart(item)}
            disabled={availableSeats === 0 || isAdmin || isInstructor}
            className="btn btn-sm border-b-2 border-b-orange-600 "
          >
            select
          </button>
        </div>
      </div>
    </div>
  );
};

export default DanceClass;

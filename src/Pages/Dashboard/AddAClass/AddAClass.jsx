import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddAClass = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classImage = form.photo.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const instructorImage = form.instructorPhoto.value;
    const availableSeats = form.seats.value;
    const price = form.price.value;
    const status = form.status.value;
    const danceClass = {className, classImage, instructorName, instructorEmail, instructorImage, availableSeats, price, status};
    console.log(danceClass)
    fetch('http://localhost:5000/classes', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(danceClass)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
            text: 'Dance class Inserted successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
    }
      form.reset()
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="className"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              placeholder="instructor name"
              name="instructorName"
              value={user?.displayName}
              readOnly
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              placeholder="instructor email"
              name="instructorEmail"
              value={user?.email}
              readOnly
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Instructor Image</span>
            </label>
            <input
              type="text"
              placeholder="instructor photo url"
              name="instructorPhoto"
              value={user?.photoURL}
              readOnly
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="text"
              placeholder="available seats"
              name="seats"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              name="price"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              type="text"
              placeholder="status"
              name="status"
              value="Pending"
              readOnly
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control mt-2 w-full col-span-2">
            <input
              className="btn bg-orange-600 text-white border-none hover:bg-orange-700"
              type="submit"
              value="Add"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAClass;

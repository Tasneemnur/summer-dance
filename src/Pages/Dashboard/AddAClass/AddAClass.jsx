import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>

      <form>
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

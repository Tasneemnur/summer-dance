import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AddAClass = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
      <h1 className="text-3xl text-center font-bold my-10">
        Add A <span className="text-yellow-500">Toy Car</span>
      </h1>

      <form >
        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="toyName"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Picture URL</span>
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
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              placeholder="seller name"
              name="sellerName"
              defaultValue={user?.displayName}
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              placeholder="seller email"
              name="sellerEmail"
              defaultValue={user?.email}
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <select className="select select-bordered" name="category" required>
              <option>Sports Car</option>
              <option>Truck</option>
              <option>Mini Police Car</option>
            </select>
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
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="rating"
              name="rating"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="quantity"
              name="quantity"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full  col-span-2">
            <label className="label">
              <span className="label-text">Detail Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              name="description"
              placeholder="detail description"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6 w-full col-span-2">
            <input
              className="btn bg-yellow-500 border-none hover:bg-yellow-600"
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
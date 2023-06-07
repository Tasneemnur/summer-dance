import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-2/4 mx-auto border rounded-md shadow-2xl bg-base-100 mt-16">
      <h1 className="text-5xl font-bold text-center mt-8">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Name"
            {...register("name", { required: true })}
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-700">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-700">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
            })}
            className="input input-bordered"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-700">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-700">Password must be 6 characters</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-700">Password must have one uppercase and one special character</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("password", { required: true })}
            className="input input-bordered"
          />
        {errors.password?.type === "required" && (
            <p className="text-red-700">Confirm Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-700">Password must be 6 characters</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-700">Password must have one uppercase and one special character</p>
          )}
    
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            {...register("photo", { required: true })}
            className="input input-bordered"
          />
          {errors.photo && (
            <span className="text-red-700">Photo is required</span>
          )}
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary text-white"
            type="submit"
            value="Login"
          />
        </div>
        <p className="mt-2">
          Already have an account? Please{" "}
          <Link className="underline text-primary" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;

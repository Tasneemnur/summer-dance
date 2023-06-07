import { useForm } from "react-hook-form";
import dance from "../../images/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="hero min-h-screen mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left md:p-10">
          <img src={dance} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center pt-5 pb-3">
            Login now
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
               {errors.email && <span className="text-red-700">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />
              {errors.password && <span className="text-red-700">This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-white"
                type="submit"
                value="Login"
              />
            </div>
            <p className="mt-2">New to this site? Please <Link className="underline text-primary" to="/register">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

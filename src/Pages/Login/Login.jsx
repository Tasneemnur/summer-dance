import { useForm } from "react-hook-form";
import dance from "../../images/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        if (loggedUser) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          return Swal.fire({
            icon: "error",
            title: "Wrong Password",
          });
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          return Swal.fire({
            icon: "error",
            title: "Wrong Email",
          });
        }
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true})
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch('https://assignment-12-summer-dance-server.vercel.app/users', {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen pt-20 pb-10">
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
              {errors.email && (
                <span className="text-red-700">Email is required</span>
              )}
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
              {errors.password && (
                <span className="text-red-700">Password is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-orange-600 hover:bg-orange-700 text-white"
                type="submit"
                value="Login"
              />
            </div>
            <p className="mt-2">
              New to this site? Please{" "}
              <Link className="underline text-primary" to="/register">
                {" "}
                Signup
              </Link>
            </p>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn mb-8 mx-8 bg-gray-300"
          >
            <FcGoogle></FcGoogle>Sign in With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

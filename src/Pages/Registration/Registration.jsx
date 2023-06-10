import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {name, email, password, photo,} = data;

    createUser(email, password)
    .then(res => {
        const registerUser = res.user;
        reset();
        updateUserData(registerUser, name, photo);
    })
    .catch(error => console.log(error))

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            const registerUser = { name: data.name, email: data.email, photo: data.photo }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(registerUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                              if (data.insertedId) {
                                  reset();
                                  Swal.fire({
                                      position: 'center',
                                      icon: 'success',
                                      title: 'User created successfully.',
                                      showConfirmButton: false,
                                      timer: 1500
                                  });
                                  navigate('/');
                              }
                          })
          })
          .catch((error) => {
           console.log(error);
          });
      };
  };

  return (
    <div className="pt-20 pb-10">
    <div className="w-2/4 mx-auto border rounded-md shadow-2xl bg-base-100">
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
            className="btn bg-orange-600 text-white"
            type="submit"
            value="Sign Up"
          />
        </div>
        <p className="mt-2">
          Already have an account? Please <Link className="underline text-primary" to="/login"> Login
          </Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Registration;

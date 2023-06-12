import { Link, useRouteError } from "react-router-dom";
import img from "../../images/img.jpg"

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="md:-mx-[107px]">
        <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h1 className="font-extrabold card-title text-5xl ">
            Error<span className="text-orange-600"> {status || 404} </span>
          </h1>
          <p className="my-4 font-semibold ">{error?.message}</p>
          <Link to="/">
            <button className="bg-orange-600 btn border-none font-bold text-white">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>

    </div>
      );
    
};

export default ErrorPage;

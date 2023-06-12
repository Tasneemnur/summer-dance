import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
    const { user } = useContext(AuthContext);
  return (
    <div className="bg-blue-950 mt-16 md:-mx-[107px]">
      <div className="md:mx-20 mx-6">
        <footer className=" text-white py-5">
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-extrabold">Summer <span className="text-orange-600">Dance</span></h1>
            </div>
            <div className="py-4">
              <h5 className="text-orange-600 text-xl font-bold mb-4">
                Connect Us
              </h5>
              <p className="mb-2">5/A Dampara, Chittagong</p>
              <p>+88 01795000000</p>
              <p className="mb-2">+88 01900000600</p>
              <p>summerdance@gmail.com</p>
              <div className="flex space-x-6 mt-5">
                <button>
                  <BsFacebook />
                </button>
                <button>
                  <BsInstagram />
                </button>
                <button>
                  <BsLinkedin />
                </button>
                <button>
                  <BsTwitter />
                </button>
              </div>
            </div>
            <div className="py-4">
              <h5 className="text-orange-600 text-xl font-bold mb-4">
                Explore 
              </h5>
              <ul className="menu menu-vertical">
                <Link to="/">Home</Link>
                <Link to="/instructors">Instructors</Link>
                

                <Link to="/classes">Classes</Link>
                {user?.email ? (
                  <>
                    <Link to="/dashboard">Dashboard</Link>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </div>

            <div className="py-4 col-span-2">
              <h5 className="text-orange-600 text-xl font-bold mb-4">
                Lets Connect
              </h5>
              <p className="mb-3">
                Give your email so that we got to know that you are interested in Summer Dance.
              </p>
              <form>
                <div className="flex">
                  <input
                    className="form-control me-2 px-2"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="email"
                  />
                  <div>
                    <button className="text-orange-600 border-0 btn" type="email">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          <p className="text-center md:mt-0 mt-3">
            Summer Dance &copy; Copyright 2023
          </p>
        </footer>
      </div>
    </div>
  );

};

export default Footer;
import Title from "../../Shared/Title/Title";
import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);
  const classes = popularClasses.slice(0, 6);
  return (
    <div>
      <Title
        heading="Popular Classes"
        subHeading="Enjoy your day to the fullest by joining our popular classes"
      ></Title>
<div className="flex justify-center items-center">
<div className="grid grid-cols-1 md:grid-cols-3 gap-11">
        {classes.map((popularClass) => (
          <div
            key={popularClass._id}
            className="card card-compact w-80 bg-base-100 shadow-xl"
          >
            <figure className="relative">
              <img src={popularClass.classImage} className="w-80 h-52" alt="" />
            </figure>
            <div className="absolute top-8 right-0 bg-white px-5 py-1 rounded-tl-md rounded-bl-md font-semibold">
              Available Seats: {popularClass.availableSeats}
            </div>
            <div className="card-body">
              <h2 className="text-orange-600 text-2xl font-bold">
                {popularClass.className}
              </h2>
              <p className="text-neutral-500 font-semibold mb-3">
                Student - {popularClass.enrolled}
              </p>
            </div>
          </div>
        ))}
      </div>

</div>
      
    </div>
  );
};

export default PopularClasses;

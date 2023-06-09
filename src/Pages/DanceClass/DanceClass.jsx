const DanceClass = ({ item }) => {
  const { classImage, className, instructorName, availableSeats, price } = item;
  const seats = parseInt(availableSeats);
  const fees = parseFloat(price);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={classImage} className="w-96 h-60" alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title text-blue-950 text-2xl font-bold">
            {className}
          </h2>
          <p className="text-orange-600 mb-2 text-sm font-semibold">
            {instructorName}
          </p>
        </div>
        <div className="md:flex">
          <p className="text-neutral-500 text-sm font-semibold">
            Available Seats: {seats}
          </p>
          <p className="text-neutral-500 text-sm font-semibold md:ms-16">
            Price: ${fees}
          </p>
        </div>
        <div className="card-actions justify-center mt-5">
          <button disabled={availableSeats === 0} className="btn btn-sm border-b-2 border-b-orange-600 ">
            select
          </button>
        </div>
      </div>
    </div>
  );
};

export default DanceClass;

const Instructor = ({ instructor }) => {
  const { name, email, photo } = instructor;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={photo} className="w-96 h-72" />
      </figure>
      <div className="card-body justify-center items-center">
        <div className="mb-4">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="text-neutral-500">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;

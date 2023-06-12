import Title from "../../Shared/Title/Title";
import cover from "../../images/banner2.png";

const Events = () => {
  return (
    <div>
      <Title
        heading="Upcoming Events"
        subHeading="Check out our upcoming events and join with us"
      ></Title>
      <div className="md:-mx-[107px]">
      <div className="hero min-h-min bg-blue-950">
  <div className="hero-content flex-col lg:flex-row md:mx-[107px]">
    <img src={cover} className="md:max-w-sm rounded-lg shadow-2xl" />
    <div className="m-5">
    <div className="flex items-center text-white my-7 ">
    <div className="border-2 flex items-center text-center border-white text-3xl bg-orange-600 rounded-md w-24 h-24 me-5">27 June</div>
      <div>
      <h1 className="text-2xl font-semibold my-0">2 DAYS FREE DANCE WORKSHOP</h1>
      </div>
    </div>
    <div className="flex items-center text-white my-7 ">
    <div className="border-2 flex items-center text-center border-white text-3xl bg-orange-600 rounded-md w-24 h-24 me-5">30 June</div>
      <div>
      <h1 className="text-2xl font-semibold my-0">OPEN HOUSE AND REGISTRATION</h1>
      </div>
    </div>
    <div className="flex items-center text-white my-7">
    <div className="border-2 flex items-center text-center border-white text-3xl bg-orange-600 rounded-md w-24 h-24 me-5">03 Aug</div>
      <div>
      <h1 className="text-2xl font-semibold my-7">ONLINE DANCE CLASS SERVICE</h1>
      </div>
    </div>
    </div>
    
  </div>
</div>
      </div>
     
    </div>
  );
};

export default Events;

import banner1 from "../../images/Banner.jpeg";
import banner2 from "../../images/b2.jpg";
import banner3 from "../../images/banner3.jpg";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full relative">
            <img src={banner1} className="w-full h-[570px]" />
            <div className="absolute text-white top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 p-10 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Welcome to Summer <span className="text-orange-600">Dance</span></h1>
            <p className="text-neutral-300">Enjoy your summer dancing with us</p>
            <button className="btn bg-orange-600 text-white border-0 my-5">Get started</button>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full relative">
            <img src={banner2} className="w-full h-[570px]" />
            <div className="absolute text-white top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 p-10 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Welcome to Summer <span className="text-orange-600">Dance</span></h1>
            <p className="text-neutral-300">Enjoy your summer dancing with us</p>
            <button className="btn bg-orange-600 text-white border-0 my-5">Get started</button>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full relative">
            <img src={banner3} className="w-full h-[570px]" />
            <div className="absolute text-white top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 p-10 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Welcome to Summer <span className="text-orange-600">Dance</span></h1>
            <p className="text-neutral-300">Enjoy your summer dancing with us</p>
            <button className="btn bg-orange-600 text-white border-0 my-5">Get started</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../../Shared/Title/Title";
import { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users?role=instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  const PopularInstructors = instructors.slice(0, 6);
  return (
    <div>
      <Title
        heading="Popular Instructors"
        subHeading="We provide you the best instructors in the town"
      ></Title>
      <div className="mb-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {PopularInstructors.map((instructor) => (
            <SwiperSlide key={instructor._id}>
              <img
                className="w-full h-96 mb-10"
                src={instructor.photo}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularInstructors;

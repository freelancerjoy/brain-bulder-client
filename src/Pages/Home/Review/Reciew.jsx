import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Review.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Reciew = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-20 pl-4 border-l-4  border-green-600">
        <h1 className="font-bold text-3xl text-green-600">
          Our Good Customers
        </h1>
        <p className="lg:max-w-sm">The wide range of educational</p>
      </div>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper">
          <SwiperSlide className="border-2 border-green-200">
            <div>
              {" "}
              <img
                className=""
                src="https://i.ibb.co/5szyBM2/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.png"
              />
            </div>
            <div className="-mt-10">
              <p className="text-center font-bold text-lg">Jesica LinsTrome</p>
              <p className="p-4 -mt-2">
                BrainBuilders is a visionary company that excels in providing
                exceptional educational resources and programs. Their focus on
                inspiring young minds
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-green-200">
            <div>
              {" "}
              <img
                className=""
                src="https://i.ibb.co/5szyBM2/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.png"
              />
            </div>
            <div className="-mt-10">
              <p className="text-center font-bold text-lg">Jesica LinsTrome</p>
              <p className="p-4 -mt-2">
                BrainBuilders is a visionary company that excels in providing
                exceptional educational resources and programs. Their focus on
                inspiring young minds
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-green-200">
            <div>
              {" "}
              <img
                className=""
                src="https://i.ibb.co/5szyBM2/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.png"
              />
            </div>
            <div className="-mt-10">
              <p className="text-center font-bold text-lg">Jesica LinsTrome</p>
              <p className="p-4 -mt-2">
                BrainBuilders is a visionary company that excels in providing
                exceptional educational resources and programs. Their focus on
                inspiring young minds
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-green-200">
            <div>
              {" "}
              <img
                className=""
                src="https://i.ibb.co/5szyBM2/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.png"
              />
            </div>
            <div className="-mt-10">
              <p className="text-center font-bold text-lg">Jesica LinsTrome</p>
              <p className="p-4 -mt-2">
                BrainBuilders is a visionary company that excels in providing
                exceptional educational resources and programs. Their focus on
                inspiring young minds
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-green-200">
            <div>
              {" "}
              <img
                className=""
                src="https://i.ibb.co/5szyBM2/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.png"
              />
            </div>
            <div className="-mt-10">
              <p className="text-center font-bold text-lg">Jesica LinsTrome</p>
              <p className="p-4 -mt-2">
                BrainBuilders is a visionary company that excels in providing
                exceptional educational resources and programs. Their focus on
                inspiring young minds
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Reciew;

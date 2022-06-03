import React from "react";
import { Link } from "react-router-dom";
import { imagesData } from "../Data/slider";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Start = () => {
  return (
    <div
      className="px-3 p-5 start-section"
      style={{ backgroundColor: "#333", color: "#fff" }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="start-flex"
          style={{ display: "flex", flexDirection: "column", gap: "40px" }}
        >
          <h3 className="fs-1">Start for free</h3>
          <p className="fs-4">
            Join the thousands of companies using Fivetran to centralize and
            transform their data.
          </p>
          <div style={{ position: "relative", width: '80%', textAlign: 'center', margin: '0 auto' }}>
            <input
              type="text"
              className="form-control-lg form-control mb-4"
              placeholder="Enter email for a 14-day free trial"
              
            />
            <input
              type="submit"
              className="btn btn-primary"
              style={{ position: "absolute", top: '0', right: '0px' }}
            />
          </div>

          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Get Demo
          </Link>

          <div className="mt-5" style={{ width: "94vw" }}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              loop={true}
              autoplay={{
                delay: 1400,
                disableOnInteraction: false,
                waitForTransition: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
                360: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
            >
              {imagesData.map((item, index) => {
                const { img } = item;
                return (
                  <div>
                    <SwiperSlide>
                      <img
                        style={{ width: "162px", height: "65px" }}
                        src={img}
                        alt=""
                      />
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;

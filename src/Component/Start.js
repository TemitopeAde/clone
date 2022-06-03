import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { imagesData } from "../Data/slider";

import "./start.css";
import "@splidejs/react-splide/css";

const Start = () => {
  return (
    <div className="px-3 p-5 start-section">
      <div className="d-flex align-items-center justify-content-center">
        <div className="start-flex">
          <h3 className="fs-1">Start for free</h3>
          <p className="fs-4">
            Join the thousands of companies using Fivetran to centralize and
            transform their data.
          </p>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              className="form-control-lg form-control mb-4"
              placeholder="Enter email for a 14-day free trial"
            />
            <input type="submit" className="btn btn-primary" />
          </div>

          <Link to="/">Get Demo</Link>

          <div className="mt-5" style={{ width: '90vw'}}>
            <Splide
              options={{
                autoplay: true,
                gap: "1rem",
                pauseOnHover : true,
                type: 'loop',
                arrows: false,
                lazyLoad: true,
                perPage: 5,
                easing: true
              }}
              aria-label="My Favorite Images"
            >
              {imagesData.map((item, index) => {
                const { img } = item;
                return (
                  <SplideSlide key={index}>
                    <img id="splider-img" src={img} alt="partners" />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;

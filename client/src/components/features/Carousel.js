import React from "react";
import Slider from "react-slick";
import slideOne from "../../resources/images/room-9.jpeg";
import slideTwo from "../../resources/images/room-10.jpeg";
import slideThree from "../../resources/images/room-5.jpeg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        overflow: "hidden",
        height: `${window.innerHeight}px`,
        
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${slideOne})no-repeat center center/cover`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${slideTwo})no-repeat center center/cover`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${slideThree})no-repeat center center/cover`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

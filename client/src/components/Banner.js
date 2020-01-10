import React from "react";

const Banner = ({ children, title, subtitle }) => {
  return (
   
    <div className="banner-center">
      <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default Banner;

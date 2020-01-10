import React from "react";
import { Link } from "react-router-dom";
import markGif from '../resources/images/tick.gif';

const Success = () => {
  return (
    <div className="loading ">
      <div className=" col-8 col-sm-6 mx-auto" style={{ paddingTop: "10%" }}>
        <h1  style={{ color: "orange" }}>Apartment Booked...</h1>
        <img src={markGif} alt="Booked" style={{ color: "orange", width:"300px" }} />
        <p style={{ color: "orange", fontSize:"20px" }}>Thank You for Booking With Us, One of Our Representatives with be in touch with you shortly</p>
        <Link to="/rooms" className="btn-primary2">
            Back to rooms
          </Link>
      </div>
    </div>
  );
};

export default Success;

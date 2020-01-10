import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../resources/images/details-1.jpeg";
import PropTypes from 'prop-types'


const RoomComp = ({ room }) => {
  const { name, slug, images, price, location } = room;
    // console.log(price);
    
  return (
    <article className="rm">
      <div className="img-container">
        <img src={images[3] || defaultImg} alt="single room " />
        <div className="price-top">
          <h6>&#8358;{parseFloat(price)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
          <p> per day</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary2 room-link">
          Details
        </Link>
      </div>
          <p className="room-info">{name}, Location: {location}.</p>
    </article>
  );
};

RoomComp.propTypes ={
  featuredRoom:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    location:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,

  })
}

export default RoomComp;

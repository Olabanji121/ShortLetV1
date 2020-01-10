import React, { Component } from "react";
import defaultImg from "../resources/images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";

export default class SingleRoomComp extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg
    };
  }

  // componentDidMount(){}

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      pets,
      images,
      wifi,
      location
    } = room;

    // const [bgImg, ...restImg] = images

    // console.log(restImg);

    return (
      <>
        <StyledHero
          img={images[3] || this.state.defaultImg}
          styleClass="roomsHero"
        >
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="text-uppercase btn btn-primary2  mt-3">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room ">
          <div className="single-room-images   ">
            {images.map((image, index) => {
              return (
                <img
                  src={image}
                  alt="room"
                  key={index}
                  className="img-fluid "
                />
              );
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>{`Location: ${location}`}</h6>
              <h6>
                <span>price:</span>
                &#8358;
                {parseFloat(price)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} People ` : `${capacity} person`}
              </h6>
              <h6>{pets ? `pets allowed` : ` no pets allowed`}</h6>
              <h6>{wifi && "free Wifi"}</h6>
              <Link to={`/booking/${this.state.slug}`} className="text-uppercase btn btn-primary2  mt-3">
              Book now
            </Link>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h4>Extras</h4>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}> {extra}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

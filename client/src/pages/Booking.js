import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Checkbox, TextArea } from "semantic-ui-react";
import { RoomContext } from "../Context";
import AuthContext from "../context/auth/AuthContext";
import BookHero from "../components/BookHero";
import AlertContext from "../context/alert/AlertContext";
import BookContext from "../context/book/BookContext";


const Booking = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const roomContext = useContext(RoomContext);
  const bookContext = useContext(BookContext);

  const { setAlert } = alertContext;
  const { error, clearError, isAuthenticated } = authContext;
  const {
    activeBooking,
    errorBooking,
    booking,
    // loading,
    clearBook
  } = bookContext;

  const { getRoom } = roomContext;

  useEffect(() => {
    if (activeBooking) {
      props.history.push("/success");
      clearBook();
    }

    if (errorBooking) {
      setAlert(errorBooking, "danger");
      clearBook();
    }

  // eslint-disable-next-line
  }, [activeBooking, errorBooking, props, clearBook]);

  const [book, setBook] = useState({
    slug: props.match.params.slug,
    email: "",
    fullname: "",
    phonenumber: "",
    // numberOfDays: 1,
    totalPrice: 0,
    city: false,
    more: "",
    taxi: false,
    cleaning: false,
    terms: false,
    loading: false,
  });

  const {
    slug,
    email,
    phonenumber,
    fullname,
    totalPrice,
    city,
    more,
    taxi,
    cleaning,
    terms,
    loading
  } = book;

  let room = getRoom(slug);

  const handleSubmit = e => {
    e.preventDefault();

    if (terms === false) {
      return alert("Please indicate that you accept the Terms and Conditions");
    } else { 
      console.log(book);
      document.getElementById("btnId").disabled = 'true';
      setBook({
        ...book, loading: true
      })
      
    }

    booking({
      slug,
      email,
      phonenumber,
      fullname,
      totalPrice,
      city,
      more,
      taxi,
      cleaning,
      terms,
      
    });

    
  };

  const handleChange = e => {
    setBook({ ...book, [e.target.id]: e.target.value });
  };

  

  const totalamount = (price, days) => {
    let total = days * price;

    return total;
  };

  const { name, capacity, price, images } = room;

 
  return (
    <BookHero
      img={images[3]}
      // styleClass="roomsHero"
    >
      <div className="container ">
        <div className="row">
        
          <div
            className=" col-10 col-sm-6 center mx-auto bg-light pb-5"
            // style={{ padding: "18% 0" }}
          >
            {/* <h1 className="text-center text-capitalize pt-3">BOOK NOW</h1> */}
            <h1 className="text-center text-capitalize pt-3 text-color">
              {name}
            </h1>
            <h3 className="text-center text-capitalize pt-3">
              {" "}
              capacity {capacity} Guest
              <span style={{ fontSize: "20px" }}>(s)</span>
            </h3>
            <h4 className="text-center pt-3 text-color">
              &#8358;
              {parseFloat(price)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              <span className="text-small">/ day</span>
            </h4>

            <p className="text-center ">
              Total Payable Amount (Apartment only):{" "}
              <span className="text-color">
                &#8358;
                {parseFloat(totalPrice)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </p>

            <Link
              to={`/rooms/${slug}`}
              className="text-uppercase btn btn-primary2 "
            >
              Back to Apartment
            </Link>
          </div>
          <div
            className=" col-10 col-sm-6 mx-auto bg-light pb-5"
            style={{ paddingTop: "5%" }}
          >
            <Form onSubmit={handleSubmit} className="ui form">
              <div className="field ">
                <Form.Field>
                  <label htmlFor="fullname">Full Name :</label>
                  <input
                    type="text"
                    id="fullname"
                    onChange={handleChange}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="email">Email :</label>
                  <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="phonenumber">Phone Number :</label>
                  <input
                    type="number"
                    id="phonenumber"
                    onChange={handleChange}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="numberOfDays">Number of Days :</label>
                  <input
                    type="number"
                    id="numberOfDays"
                    onChange={e => {
                      let days = e.target.value;
                      let total = totalamount(price, days);
                      setBook({
                        ...book,
                        totalPrice: total,
                        numberOfDays: days
                      });
                    }}
                    required
                  />
                </Form.Field>
                <TextArea
                  placeholder="Tell us more"
                  id="more"
                  onChange={handleChange}
                  
                />
              </div>

              <div className="row">
                <div className="col">
                  <Checkbox
                    label="Taxi Ride"
                    id="taxi"
                    onClick={e => {
                      setBook({
                        ...book,
                        taxi: true
                      });
                    }}
                    required
                  />
                </div>
                <div className="col">
                  <Checkbox
                    label="Cleaning Services"
                    id="cleaning"
                    onClick={e => {
                      setBook({
                        ...book,
                        cleaning: true
                      });
                    }}
                    required
                  />
                </div>
                <div className="col">
                  <Checkbox
                    label="City Tour"
                    id="city"
                    required
                    onClick={e => {
                      setBook({
                        ...book,
                        city: true
                      });
                    }}
                  />
                </div>
              </div>
              <hr></hr>
              <Form.Field
                control={Checkbox}
                label="I agree to the Terms and Conditions"
                id="terms"
                onClick={e => {
                  setBook({
                    ...book, 
                    terms: true
                  });
                }}
              />
              <div className="field mx-auto">
                <button className="text-uppercase  btn-primary2 btn-block " id="btnId">
                  {loading ? 'Please Wait' : 'Book now'}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </BookHero>
  );
};

export default Booking;

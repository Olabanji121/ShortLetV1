import React, { useReducer } from "react";
import axios from "axios";
import BookContext from "./BookContext";
import BookReducer from "./BookReducer";

import { BOOK_SUCCESS, CLEAR_BOOK, BOOK_FAIL } from "../../types";

const BookState = props => {
  const initialState = {
    activeBooking: false,
    errorBooking: null,
    loading: true
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  const booking = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "/api/v1/book/booking",
        formData,
        config
      );

      dispatch({
        type: BOOK_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BOOK_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const clearBook = () =>
    dispatch({
      type: CLEAR_BOOK
    });

  return (
    <BookContext.Provider
      value={{
        activeBooking: state.activeBooking,
        errorBooking: state.error,
        loading: state.loading,
        booking,
        clearBook
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;

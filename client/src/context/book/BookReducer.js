import {
    BOOK_SUCCESS,
    BOOK_FAIL,
    CLEAR_BOOK
  } from "../../types";

  
  export default (state,action) => {
    const {type, payload} = action

    switch(type){

        case BOOK_SUCCESS:
            return{
                ...state,
                payload,
                activeBooking: true,
                loading: false,

            }
            
        case BOOK_FAIL:
            return{
                ...state,
                activeBooking: false,
                loading: false,
                errorBooking: payload

            }
        case CLEAR_BOOK:
            return{
                ...state,
                activeBooking: false
            }
        default:
            return state
    }
  }
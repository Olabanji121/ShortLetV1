const mongoose = require("mongoose");
const validator = require("validator");

const BookSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  slug: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: [true, "Please input an email"],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Provide a vaild Email"]
  },

  fullname: {
    type: String,
    required: true
  },

  phonenumber: {
    type: Number,
    required: true
  },

  totalPrice: {
    type: Number,
    required: true
  },

  city: {
    type: Boolean,
    
  },
  more: {
    type: String,
    
  },

  taxi: {
    type: Boolean,
    
  },
  cleaning: {
    type: Boolean,
   
  },
  terms: {
    type: Boolean,
    required: true
  },
  

  active: {
    type: Boolean,
    default: true,
    select: false
  },

  datecreated: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;

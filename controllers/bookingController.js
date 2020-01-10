const Book = require('../models/bookingModel');
const User = require('../models/userModel');



exports.createBooking = async( req, res)=>{

    try {

        const user = await User.findById(req.user.id);
        const newBooking = await Book.create({
            slug:req.body.slug,
            email: req.body.email,
            fullname: req.body.fullname,
            phonenumber: req.body.phonenumber,
            totalPrice:req.body.totalPrice,
            city: req.body.city,
            more: req.body.more,
            taxi: req.body.taxi,
            cleaning:req.body.cleaning,
            terms: req.body.terms,
            roomname: req.body.roomname,
            user: req.user.id
        });
        res.status(201).json({
            status: "success",
            createBy: user,
            data: {
              Booking: newBooking
            }
          });
        
    } catch (err) {

        res.status(500).json({
            status: 'failed',
            stack: err.stack,
            msg: err.message 
          });
        
    }

}

exports.getbook = async(req, res)=>{


 const bookings = await Book.find().populate('user');


 try {

  res.status(200).json({
    status: "success",
    NumOFBookings:  bookings.length,
    data: {
      bookings
    }
  })
   
 } catch (err) {
  res.status(500).json({
    status: "failed",
    message: err.message
  });
 }
 
}





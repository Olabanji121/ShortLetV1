const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please input a name ']
    
  },

  email: {
    type: String,
    required: [true, 'Please input an email'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please Provide a vaild Email']
  },

  photo:{ 
    type:String,
    default: "default.jpg" 
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user'
  },

  password: {
    type: String,
    required: [true, 'Please provide  a password '],
    minlength: 8,
    select: false
  },

  // passwordConfirm: {
  //   type: String,
  //   required: [true, 'Please confirm your passsword '],
  //   validate: {
  //     // this works on Save or create
  //     validator: function(el) {
  //       return el === this.password;
  //     },

  //     msg: 'Password did not match'
  //   }
  // },

  passwordchangedat: {
    type: Date
  },

  passwordResetToken: String,
  passwordResetExpires: Date,

  active:{
    type: Boolean, 
    default: true,
    select:false
  },

  datecreated: {
    type: Date,
    default: Date.now
  }
});

// Document pre-Middleware it runs b4 .save() and .create() to hash password b4 saving to DB
UserSchema.pre('save', async function(next) {
  // only run this function if password is modified
  if (!this.isModified('password')) return next();

  // hash the password
  this.password = await bcrypt.hash(this.password, 12);

  // // delete the passwordconfirmed field
  // this.passwordConfirm = undefined;
  next();
});

//  pre save middle ware  for passwordchanged at 
UserSchema.pre('save', function(next){

  if(!this.isModified('password')|| this.isNew) return next();

  this.passwordchangedat = Date.now() - 1000;

  next();
})





// COMPARE PASSWORD : instance method : available on all document of the user model
UserSchema.methods.correctPassword = async function(inputPassword, userPassword){
    return await bcrypt.compare(inputPassword, userPassword)
}

// CHECK IF USER CHANGED PASSWORD After token was issued : instance method : available on all document of the user model

UserSchema.methods.changededPasswordAfter = function(jwtTimeStamp) {
  if (this.passwordchangedat) {
    const changeTimeStamp = parseInt(
      this.passwordchangedat.getTime() / 1000,
      10
    );
    // console.log(changeTimeStamp, jwtTimeStamp);
    return jwtTimeStamp < changeTimeStamp; //100s < 200s
  }

  // means not changed
  return false;
};



module.exports = User = mongoose.model('User', UserSchema);

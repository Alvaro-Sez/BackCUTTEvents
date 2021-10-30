const  
mongoose = require("mongoose"),
Schema = mongoose.Schema

const userSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  hash: String
})


const User = mongoose.model('users', userSchema)


module.exports = User

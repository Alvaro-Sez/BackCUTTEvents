const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString={
  type:String,
  required: true
}

const HotelSchema = new Schema({
  name: reqString,
  hotelInfo:{
    direcction: String,
    numberStars: Number,
    numberRooms: Number,
    checkin_out: String,
    meetingRooms: String,
    WheelChariAccesible: Boolean,
    wifiSpeed: String,
    swimmingPool: String,
    restaurants: String
  },  
  textContent: [String],
  imageContentUrl: [String]
},{
  timestamps: true
})

module.exports = mongoose.model('hotels', HotelSchema)


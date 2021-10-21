const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString={
  type:String,
  required: true,
  unique: true
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


/* ProductSchema.methods.setImgUrl = function(filename){
  const {host, port} = appConfig
  this.imgUrl = `${host}:${port}/public/${filename}`
} */


module.exports = mongoose.model('hotels', HotelSchema)


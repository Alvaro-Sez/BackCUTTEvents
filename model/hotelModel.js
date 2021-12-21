const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString={
  type:String,
  required: true,
}

const HotelSchema = new Schema({
  name: reqString,
  city: String,
  direction: String,
  numberStars: Number,
  numberRooms: Number,
  checkin_out: String,
  meetingRooms: String,
  wheelChairAccesible: Boolean,
  wifiSpeed: String,
  swimmingPool: String,
  restaurants: String,
  textContent: [String],
  imageContentUrl: [String],
  coordinates: [String], 
  introduction : [String],
  price: [{
    DUInr: Number,
    DUIprice: Number,
    DoubleRoomNr: Number,
    DoubleRoomPrice: Number,
    breakfast: Number,
    DailyTax: Number
  }]
},{
  timestamps: true
})

HotelSchema.methods.setImgUrl = function(files){
  const arrImgUrl = []
    files.forEach(
    el=>arrImgUrl.push(el.location))
    this.imageContentUrl = arrImgUrl
  }

const Hotel = mongoose.model('hotels', HotelSchema)

module.exports ={
  Hotel,
  HotelSchema
}


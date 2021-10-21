const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {appConfig} = require('../config')

const reqString={
  type:String,
  required: true,
  unique: true
}

const HotelSchema = new Schema({
  name: reqString,
  hotelInfo:{
    direction: String,
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

HotelSchema.methods.setImgUrl = function(files){
  const {host, port} = appConfig
  const arrImgUrl = []
    files.forEach(
    el=>arrImgUrl.push(`${host}:${port}/public/hotels/${el.filename}`
    ))
    this.imageContentUrl = arrImgUrl
  }



module.exports = mongoose.model('hotels', HotelSchema)


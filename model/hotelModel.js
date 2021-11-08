const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {appConfig} = require('../config')

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
  introduction : [String] 
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


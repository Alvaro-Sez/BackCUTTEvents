const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EventSchema = require('./eventsModel')
const HotelSchema = require('./hotelModel')
const RestaurantSchema = require('./restaurantModel')


const reqString={
  type:String,
  required: true
}

const CustomerSchema = new Schema({
  name: reqString,
  date: String,
  group: String,
  accomodation:{
    hotels:[HotelSchema]
  },
  schedule:[{
    date: String,
    events: [EventSchema],
    lunch: [RestaurantSchema],
    dinner: [RestaurantSchema]
  }]
},{
  timestamps: true
})

module.exports = mongoose.model('customers', CustomerSchema)


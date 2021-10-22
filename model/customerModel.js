const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { RestaurantSchema } = require('./restaurantModel')
const { EventSchema } = require('./eventsModel')
const { HotelSchema } = require('./hotelModel')


const reqString={
  type:String,
  required: true,
  unique: true
}

const CustomerSchema = new Schema({
  id: reqString,
  name: String,
  date: String,
  group: String,
  hotels:[HotelSchema],
  schedule:[{
    date: String,
    events: [EventSchema],
    lunch: [RestaurantSchema],
    dinner: [RestaurantSchema]
  }]
},{
  timestamps: true
})

const Customer = mongoose.model('customers', CustomerSchema)

module.exports = {
  Customer
}


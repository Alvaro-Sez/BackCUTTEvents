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

const ProjectSchema = new Schema({
  code: reqString,
  accountManager: String,
  groupName: String,
  groupLocation: String,
  arrivalDay: String,
  departureDay: String,
  nrPax: Number,
  clientCo: String,
  clientAccManager: String,
  hotels:[HotelSchema],
  schedule:[{
    date: String,
    morningEvents: [EventSchema],
    afternoonEvents: [EventSchema],
    lunch: [RestaurantSchema],
    dinner: [RestaurantSchema]
  }]
},{
  timestamps: true
})

const Project = mongoose.model('projects', ProjectSchema)

module.exports = {
  Project
}


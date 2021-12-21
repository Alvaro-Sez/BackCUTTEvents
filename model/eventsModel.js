const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { TransferSchema } = require('./transferModel')

const reqString={
  type:String,
  required: true,
}

const EventSchema = new Schema({
  name: reqString,
  city: String,
  titleSideBar: String,
  title: String,
  horario: String,
  textContent: [String],
  imageContentUrl: [String],
  price: Number,
  coordinates: [String],
  introduction: [String],
  transfer:[TransferSchema]
},{
  timestamps: true
})

EventSchema.methods.setImgUrl = function(files){
  const arrImgUrl = []
    files.forEach(
    el=>arrImgUrl.push(el.location))
    this.imageContentUrl = arrImgUrl
  }

const Event = mongoose.model('events', EventSchema)

module.exports = {
  Event,
  EventSchema
}
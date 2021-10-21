const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {appConfig} = require('../config')

const reqString={
  type:String,
  required: true,
  unique: true
}

const EventSchema = new Schema({
  name: reqString,
  titleSideBar: String,
  title: String,
  textContent: [String],
  imageContentUrl: [String]
},{
  timestamps: true
})

EventSchema.methods.setImgUrl = function(files){
  const {host, port} = appConfig
  const arrImgUrl = []
    files.forEach(
    el=>arrImgUrl.push(`${host}:${port}/public/events/${el.filename}`
    ))
    this.imageContentUrl = arrImgUrl
  }

module.exports = mongoose.model('events', EventSchema)


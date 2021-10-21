const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString={
  type:String,
  required: true
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

module.exports = mongoose.model('events', EventSchema)


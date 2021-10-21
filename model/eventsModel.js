const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

/* ProductSchema.methods.setImgUrl = function(filename){
  const {host, port} = appConfig
  this.imgUrl = `${host}:${port}/public/${filename}`
} */

module.exports = mongoose.model('events', EventSchema)


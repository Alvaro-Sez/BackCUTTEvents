const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {appConfig} = require('../config')

const reqString={
  type:String,
  required: true,
  unique: true
}

const RestaurantSchema = new Schema({
  name: reqString,
  textContent:[String],
  imageContentUrl:[String]
},{
  timestamps: true
})



RestaurantSchema.methods.setImgUrl = function(files){
const {host, port} = appConfig
const arrImgUrl = []
console.log(`${files} from restaurant Schema`)
  files.forEach(
  el=>arrImgUrl.push(`${host}:${port}/public/restaurants/${el.filename}`
  ))
  this.imageContentUrl = arrImgUrl
}

module.exports = mongoose.model('restaurants', RestaurantSchema)


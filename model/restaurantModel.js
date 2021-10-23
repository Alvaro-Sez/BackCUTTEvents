const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {appConfig} = require('../config')

const reqString={
  type:String,
  required: true,
}

const RestaurantSchema = new Schema({
  name: reqString,
  textContent:[String],
  imageContentUrl:[String]
},{
  timestamps: true
})



RestaurantSchema.methods.setImgUrl = function(files){
  const arrImgUrl = []
    files.forEach(
    el=>arrImgUrl.push(el.location))
    this.imageContentUrl = arrImgUrl
  }

const Restaurant = mongoose.model('restaurants', RestaurantSchema)

module.exports = {
  Restaurant,
  RestaurantSchema
}


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString={
  type:String,
  required: true,
}

const RestaurantSchema = new Schema({
  name: reqString,
  city: String,
  textContent:[String],
  imageContentUrl:[String],
  price: Number,
  coordinates: [String],
  introduction: [String]
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


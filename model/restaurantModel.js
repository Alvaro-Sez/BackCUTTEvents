const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString={
  type:String,
  required: true
}

const RestaurantSchema = new Schema({
  name: reqString,
  textContent:[String],
  imageContentUrl:[String]
},{
  timestamps: true
})

module.exports = mongoose.model('restaurants', RestaurantSchema)


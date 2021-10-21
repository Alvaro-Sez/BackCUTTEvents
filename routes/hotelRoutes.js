const express = require('express')
const { addHotel, getHotels } = require('../controllers/hotelControllers')
const uploadHotelsImgs = require('../libs/hotelStorage')
const apiHotels = express.Router()


apiHotels.get('/hotels', getHotels)
apiHotels.post(
  '/hotels',
  uploadHotelsImgs.array('images',12),
  addHotel
  )




module.exports = apiHotels
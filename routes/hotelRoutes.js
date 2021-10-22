const express = require('express')
const { addHotel, getHotels, deleteHotel } = require('../controllers/hotelControllers')
const uploadHotelsImgs = require('../libs/hotelStorage')
const apiHotels = express.Router()


apiHotels.get('/hotels', getHotels)
apiHotels.post('/hotels',uploadHotelsImgs.array('images',12),addHotel)
apiHotels.delete('/hotels/:id', deleteHotel)




module.exports = apiHotels
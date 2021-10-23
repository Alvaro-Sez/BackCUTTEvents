const express = require('express')
const { addHotel, getHotels, deleteHotel } = require('../controllers/hotelControllers')
const uploadS3 = require('../libs/s3Storage')
const apiHotels = express.Router()


apiHotels.get('/hotels', getHotels)
apiHotels.post('/hotels',uploadS3.array('images',12),addHotel)
apiHotels.delete('/hotels/:id', deleteHotel)




module.exports = apiHotels
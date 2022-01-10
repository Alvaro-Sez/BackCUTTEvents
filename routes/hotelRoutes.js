const express = require('express')
const { addHotel, getHotels, deleteHotel, updateHotel } = require('../controllers/hotelControllers')
const uploadS3 = require('../libs/s3Storage')
const apiHotels = express.Router()
const upload = require('multer')()


apiHotels.get('/hotels', getHotels)
apiHotels.post('/hotels',uploadS3.array('images',12),addHotel)
apiHotels.delete('/hotels/:id', deleteHotel)
apiHotels.patch('/hotels/:id', upload.none(), updateHotel)




module.exports = apiHotels
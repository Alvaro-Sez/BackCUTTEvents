const express = require('express')
const {addRestaurant, getRestaurants, deleteRestaurant, updateRestaurant} = require('../controllers/restaurantController')
const uploadS3 = require('../libs/s3Storage')
const apiRestaurants = express.Router()
const upload = require('multer')()
apiRestaurants.get('/restaurants', getRestaurants)
apiRestaurants.post('/restaurants',uploadS3.array('images',12),addRestaurant)
apiRestaurants.delete('/restaurants/:id', deleteRestaurant)
apiRestaurants.patch('/restaurants/:id', upload.none(), updateRestaurant)


module.exports = apiRestaurants
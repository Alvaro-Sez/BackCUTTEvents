const express = require('express')
const {addRestaurant, getRestaurants, deleteRestaurant} = require('../controllers/restaurantController')
const uploadS3 = require('../libs/s3Storage')
const apiRestaurants = express.Router()

apiRestaurants.get('/restaurants', getRestaurants)
apiRestaurants.post('/restaurants',uploadS3.array('images',12),addRestaurant)
apiRestaurants.delete('/restaurants/:id', deleteRestaurant)


module.exports = apiRestaurants
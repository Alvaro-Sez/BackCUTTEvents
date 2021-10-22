const express = require('express')
const {addRestaurant, getRestaurants, deleteRestaurant} = require('../controllers/restaurantController')
const  uploadRestaurantImgs  = require('../libs/restaurantStorage')
const apiRestaurants = express.Router()

apiRestaurants.get('/restaurants', getRestaurants)
apiRestaurants.post('/restaurants',uploadRestaurantImgs.array('images',12),addRestaurant)
apiRestaurants.delete('/restaurants/:id', deleteRestaurant)


module.exports = apiRestaurants
const express = require('express')
const cors = require('cors')
const app = express()
const apiRestaurants = require('./routes/restaurantRoutes')
const apiHotels = require('./routes/hotelRoutes')

app.use(cors())
app.use('/public', express.static(`${__dirname}/storage`))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/v1',apiRestaurants)
app.use('/v1',apiHotels)




module.exports = app
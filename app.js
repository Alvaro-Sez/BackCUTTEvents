const express = require('express')
const cors = require('cors')
const app = express()
const apiRestaurants = require('./routes/restaurantRoutes')
const apiHotels = require('./routes/hotelRoutes')
const apiEvents = require('./routes/eventRoutes')
const apiCustomers = require('./routes/customerRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/public', express.static(`${__dirname}/storage`))
app.use('/v1', apiRestaurants)
app.use('/v1', apiHotels)
app.use('/v1', apiEvents)
app.use('/v1', apiCustomers)



module.exports = app
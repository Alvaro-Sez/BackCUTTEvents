const express = require('express')
const cors = require('cors')
const app = express()
const apiRestaurants = require('./routes/restaurantRoutes')
const apiHotels = require('./routes/hotelRoutes')
const apiEvents = require('./routes/eventRoutes')
const apiProjects = require('./routes/projectRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/public', express.static(`${__dirname}/storage`))
app.use( apiRestaurants )
app.use( apiHotels )
app.use( apiEvents )
app.use( apiProjects )



module.exports = app
const express = require('express')
const cors = require('cors')
const app = express()
const apiRestaurants = require('./routes/restaurantRoutes')
const apiHotels = require('./routes/hotelRoutes')
const apiEvents = require('./routes/eventRoutes')
const apiProjects = require('./routes/projectRoutes')
const apiUsers = require('./routes/userRoutes')
const passport = require('passport')
require('./accesManagment/passportConfig')(passport)

app.use(cors())
app.use(passport.initialize())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/public', express.static(`${__dirname}/storage`))
app.use( apiUsers )
app.use( passport.authenticate('jwt', {session: false}), apiProjects )
app.use( apiRestaurants )
app.use( apiHotels )
app.use( apiEvents )




module.exports = app

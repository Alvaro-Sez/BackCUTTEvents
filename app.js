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
app.use( passport.authenticate('jwt', {session: false}), apiRestaurants )
app.use( passport.authenticate('jwt', {session: false}), apiHotels )
app.use( passport.authenticate('jwt', {session: false}), apiEvents )
app.use( passport.authenticate('jwt', {session: false}), apiProjects )
app.use( apiUsers )



module.exports = app
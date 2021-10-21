const express = require('express')
const cors = require('cors')
const app = express()
const apiEvents = require('./routes/eventRoutes')

app.use(cors())
app.use('/public', express.static(`${__dirname}/storage/imgs`))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/v1',apiEvents)




module.exports = app
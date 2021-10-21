const express = require('express')
const { addEvent, getEvents } = require('../controllers/eventControllers')
const apiEvents = express.Router()
const uploadEventsImgs = require('../libs/eventStorage')


apiEvents.get('/events', getEvents)
apiEvents.post('/events', uploadEventsImgs.array('images',12), addEvent)





module.exports = apiEvents
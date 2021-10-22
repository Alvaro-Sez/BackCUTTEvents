const express = require('express')
const { addEvent, getEvents, deleteEvent } = require('../controllers/eventControllers')
const apiEvents = express.Router()
const uploadEventsImgs = require('../libs/eventStorage')


apiEvents.get('/events', getEvents)
apiEvents.post('/events', uploadEventsImgs.array('images',12), addEvent)
apiEvents.delete('/events/:id', deleteEvent)


module.exports = apiEvents
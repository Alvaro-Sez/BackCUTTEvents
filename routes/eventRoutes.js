const express = require('express')
const { addEvent, getEvents, deleteEvent, updateEvent } = require('../controllers/eventControllers')
const apiEvents = express.Router()
const uploadEventsImgs = require('../libs/eventStorage')


apiEvents.get('/events', getEvents)
apiEvents.post('/events', uploadEventsImgs.array('images',12), addEvent)
apiEvents.delete('/events/:id', deleteEvent)
apiEvents.patch('/events/:id', updateEvent)




module.exports = apiEvents
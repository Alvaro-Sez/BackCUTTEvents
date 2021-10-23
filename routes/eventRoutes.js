const express = require('express')
const { addEvent, getEvents, deleteEvent } = require('../controllers/eventControllers')
const apiEvents = express.Router()
const uploadS3 = require('../libs/s3Storage')


apiEvents.get('/events', getEvents)
apiEvents.post('/events', uploadS3.array('images',12), addEvent)
apiEvents.delete('/events/:id', deleteEvent)


module.exports = apiEvents
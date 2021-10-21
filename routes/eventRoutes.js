const express = require('express')
const apiEvents = express.Router()

apiEvents.get('/events')
apiEvents.post('/events')





module.exports = apiEvents
const express = require('express')
const apiCustomers = express.Router()

apiCustomers.get('/events')
apiCustomers.post('/events')


module.exports = apiCustomers

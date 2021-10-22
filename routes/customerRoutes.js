const express = require('express')
const apiCustomers = express.Router()
const upload = require('multer')()
const {
  addCustomer,
  getCustomers,
  deleteCustomer,
  addScheduleObj,
  addHotelsArray
} = require('../controllers/customerControllers')

apiCustomers.post('/customers', upload.none(), addCustomer)
apiCustomers.get('/customers', getCustomers)
apiCustomers.delete('/customers/:id', deleteCustomer)
apiCustomers.post('/addSchedule/:id', addScheduleObj )
apiCustomers.post('/addHotels/:id', addHotelsArray )



module.exports = apiCustomers

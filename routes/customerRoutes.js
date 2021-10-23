const express = require('express')
const apiCustomers = express.Router()
const upload = require('multer')()
const {
  addCustomer,
  getCustomers,
  deleteCustomer,
  addScheduleObj,
  addHotelsArray,
  getOneCustomer
} = require('../controllers/customerControllers')

apiCustomers.get('/customers', getCustomers)
apiCustomers.get('/customer/:id', getOneCustomer)
apiCustomers.post('/customers', upload.none(), addCustomer)
apiCustomers.post('/addSchedule/:id', addScheduleObj )
apiCustomers.post('/addHotels/:id', addHotelsArray )
apiCustomers.delete('/customers/:id', deleteCustomer)



module.exports = apiCustomers

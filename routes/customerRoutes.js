const express = require('express')
const apiCustomers = express.Router()
const upload = require('multer')()
const {addCustomer, getCustomers} = require('../controllers/customerControllers')

apiCustomers.post('/customers', upload.none(), addCustomer)
apiCustomers.get('/customers', getCustomers)


module.exports = apiCustomers

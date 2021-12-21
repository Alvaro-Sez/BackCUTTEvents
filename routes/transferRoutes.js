const express = require('express')
const upload = require('multer')()
const { addTransfer, getTransfers, deleteTransfer } = require('../controllers/transferControllers')
const apiTransfers = express.Router()

apiTransfers.get('/transfers', getTransfers)
apiTransfers.post('/transfers', upload.none(), addTransfer)
apiTransfers.delete('/transfers/:id', deleteTransfer)


module.exports = apiTransfers

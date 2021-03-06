const multer = require('multer')

const hotelStorage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './storage/hotels')
  },
  filename: function (req, file , cb){
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
})


const uploadHotelsImgs = multer({storage:hotelStorage})

module.exports = uploadHotelsImgs
const multer = require('multer')

const eventStorage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './storage/events')
  },
  filename: function (req, file , cb){
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
})


const uploadEventsImgs = multer({storage:eventStorage})

module.exports = uploadEventsImgs
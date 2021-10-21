/* logica relacionada con el almacenamiento */
/* aqui se usa multer */

const multer = require('multer')

const restaurantStorage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './storage/restaurants')
  },
  filename: function (req, file , cb){
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
})


const uploadRestaurantImgs = multer({storage:restaurantStorage})

module.exports = {
  uploadRestaurantImgs
}
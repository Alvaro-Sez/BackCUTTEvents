const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')



const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccesKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

const s3Storage = multerS3({
  s3: s3,
  bucket: process.env.S3_BUCKET_NAME,
  metadata: function (req, file, cb){
    cb(null, { fieldName: file.fieldname })
  },
  key: function (req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
})

const uploadS3 = multer({storage: s3Storage})

module.exports = uploadS3
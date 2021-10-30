const express = require('express')
const apiUsers = express.Router()
const { registerUser, loginUser } = require('../controllers/userControllers.js')
const passport = require('passport')

/* apiUsers.post('/register', registerUser ) */
apiUsers.post('/login', loginUser )
apiUsers.get('/protected', passport.authenticate('jwt', {session: false}), (req,res) => {
  res.status(200).send({success: true})
})



module.exports = apiUsers
const User = require('../model/usersModel')
const bcrypt = require('bcrypt')
const issueJWT = require('../accesManagment/jwtManagment')

const registerUser = async(req, res) => {
  const {
    username,
    password
  } = req.body
  /* if(password){
    hash = await bcrypt.hash(password, 8)
  } else {
    res.status(500).send({message: 'password or username not provided'})
  } */ //implementation to prevent the server shutdown
  const hash = await bcrypt.hash(password, 8)

  const user = new User({
    username,
    hash
  })
  user.save()
    .then((user)=>{
      const {_id} = user
      const { token } = issueJWT(_id)
      res.status(201).send({user, token})
    })
    .catch(err=> res.status(500).send({message: err.message}))
}

const loginUser = async (req, res) => {
  try{
    const {
      username,
      password
    } = req.body

    const user = await User.findOne({username})

    const { hash, _id } = user

    const valid = await bcrypt.compare(password, hash)
    console.log(`valid: ${valid}`)
    if(valid){
      const { token } = issueJWT(_id)
      res.status(200).send({user, token})
    } else {
      res.status(401).send({message: 'incorrect credentials'})
    }
  } catch(e) {
    res.status(500).send({message: e.message})

  }
}


module.exports = {
  registerUser,
  loginUser
}
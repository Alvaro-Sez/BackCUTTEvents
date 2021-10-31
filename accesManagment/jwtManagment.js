const jwt = require('jsonwebtoken')

const issueJWT = (id) => {

  const payload = {
    sub: id,
    iat: Math.floor(Date.now()/1000)
  }

  signedToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'1d'})

  return {
    token: `Bearer ${signedToken}`
  }
}


module.exports = issueJWT
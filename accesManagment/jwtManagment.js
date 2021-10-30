const jwt = require('jsonwebtoken')

const issueJWT = (id) => {

  const payload = {
    sub: id,
    iat: Date.now()
  }

  signedToken = jwt.sign(payload, process.env.JWT_SECRET)

  return {
    token: `Bearer ${signedToken}`
  }
}


module.exports = issueJWT
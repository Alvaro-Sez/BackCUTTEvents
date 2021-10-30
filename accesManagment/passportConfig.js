const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../model/usersModel')

const strategy = new JwtStrategy(
  {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  },
  async(payload, done)=>{
    try{
      const { sub } = payload
      const user = await User.findOne({_id: sub})
      if(user){
        return done(null, user)
      } else {
        return done(null, false)
      }
    } catch (e) {
      done(e, null)
    }
  }
)

module.exports = passport => passport.use(strategy)
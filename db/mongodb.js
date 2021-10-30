const mongoose = require('mongoose')


mongoose.connection.on('open', ()=>console.log('db connected'))

async function connectDbproduction (uri){
  await mongoose.connect(uri, {useNewUrlParser: true})
}
async function connectDbdevelopment({host, port, dbName}){
  const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, {useNewUrlParser: true})
}


module.exports = {
  connectDbproduction,
  connectDbdevelopment
}
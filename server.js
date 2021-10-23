require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/mongodb')
const {appConfig, dbConfig} = require('./config')

async function initApp(appConfig, dbConfig){
  const {port} = appConfig
  try{
    await connectDb(dbConfig.dbURI)
    app.listen(port, ()=> console.log(`server running on port:${port}`))

  } catch (e){
    console.log(e)
    process.exit(0)
  }
}

initApp(appConfig, dbConfig)
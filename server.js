require('dotenv').config()
const app = require('./app')
const { connectDbproduction, connectDbdevelopment } = require('./db/mongodb')
const {appConfig, dbConfig} = require('./config')

async function initApp(appConfig, dbConfig){
  const {port} = appConfig
  try{
    if(process.env.NODE_ENV === 'production'){
    await connectDbproduction(dbConfig.dbURI)
    }
    if(process.env.NODE_ENV === 'development'){
    await connectDbdevelopment(dbConfig)  
    }
    app.listen(port, ()=> console.log(`server running on port:${port} on ${process.env.NODE_ENV} mode`))

  } catch (e) {
    console.log(e)
    process.exit(0)
  }
}

initApp(appConfig, dbConfig)


/* filtro por ciudad de los proveedores, cambiar el nombre de customers por project */
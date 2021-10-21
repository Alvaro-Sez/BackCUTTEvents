config ={
  appConfig:{
    port: process.env.PORT,
    host: process.env.HOST
  },
  dbConfig:{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME
  }
}


module.exports = config
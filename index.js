import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'

const app = express()


const startServer = async () => {

  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

    console.log('🏛 DB CONNECTED SUCCESSFULLY')

    app.listen(port, () => console.log(`🏛 Express is up and running on port ${port}`))

  } catch (err) {
    console.log(`🆘 Ooops, something has gone wrong ${err}`)
  }
}

startServer()
import express from 'express'
import mongoose from 'mongoose'

const app = express()

const port = 4000

const dbURI = 'mongodb://localhost/godpilot-db-api'


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
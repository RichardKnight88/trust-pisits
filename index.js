import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'

const app = express()

const startServer = async () => {

  try {

    //await connecting to db
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

    console.log('🏛 DB CONNECTED SUCCESSFULLY')


    app.use((req, _res, next) => {
      console.log(`Incoming request. Method: ${req.method} from URL: ${req.url}`) 
      next()
    })

    //convert incoming data to javascript
    app.use(express.json())

    app.use('/api', router)


    //listen for express connecting to port
    app.listen(port, () => console.log(`🏛 Express is up and running on port ${port}`))

  } catch (err) {
    console.log(`🆘 Ooops, something has gone wrong ${err}`)
  }
}




startServer()
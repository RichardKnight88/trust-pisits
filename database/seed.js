import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import usersSeed from './seedData/usersSeed.js'
import User from '../models/user.js'

const seedDatabase = async () => {

  try {

    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 DATABASE CONNECTED')

    await mongoose.connection.db.dropDatabase()
    console.log('⬇️ DATABASE DROPPED')

    //add as a variable
    await User.create(usersSeed)
    console.log('🌱 DATABASE SEEDED WITH USER')
    // console.log(usersSeed[0].username)
    // need to add array method when we have multiple users seeding

    //create gods vis GodsSchema

    await mongoose.connection.close()
    console.log('🚪 CONNECTION CLOSED')


  } catch (err) {
    console.log('SEED ERROR', err)
    await mongoose.connection.close()
    console.log('🚪 CONNECTION CLOSED')
  }
  
}

seedDatabase()
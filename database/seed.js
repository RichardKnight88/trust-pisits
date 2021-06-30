import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import usersSeed from './seedData/usersSeed.js'
import godsSeed from './seedData/godsSeed.js'
import User from '../models/user.js'
import God from '../models/gods.js'

const seedDatabase = async () => {

  try {

    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 DATABASE CONNECTED')

    await mongoose.connection.db.dropDatabase()
    console.log('⬇️ DATABASE DROPPED')


    const users = await User.create(usersSeed)
    // need to add array method when we have multiple users seeding

    
    const godsWithOwner = godsSeed.map(god => {
      return { ...god, owner: users[0]._id }
    })

    const gods = await God.create(godsWithOwner)
    console.log(`🌱 DATABASE SEEDED WITH USER and ${gods.length} gods`)



    await mongoose.connection.close()
    console.log('🚪 CONNECTION CLOSED')


  } catch (err) {
    console.log('SEED ERROR', err)
    await mongoose.connection.close()
    console.log('🚪 CONNECTION CLOSED')
  }
  
}

seedDatabase()
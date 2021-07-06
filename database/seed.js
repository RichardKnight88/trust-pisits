import mongoose from 'mongoose'
import { dbURI, getUserIdFromName, matchGodToComment } from '../config/environment.js'
import usersSeed from './seedData/usersSeed.js'
import godsSeed from './seedData/godsSeed.js'
import commentsSeed from './seedData/commentsSeed.js'
import User from '../models/user.js'
import God from '../models/gods.js'
import Comment from '../models/comments.js'

const seedDatabase = async () => {

  try {

    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 DATABASE CONNECTED')

    await mongoose.connection.db.dropDatabase()
    console.log('⬇️ DATABASE DROPPED')


    const users = await User.create(usersSeed)
    // need to add array method when we have multiple users seeding
    console.log(`🌱 DATABASE SEEDED WITH ${users.length} users`)


    commentsSeed.map(commentEntry => {
      // console.log('COMMENT ENTRY PLACEHOLDER', commentEntry.placeholderOwner)

      commentEntry.owner = getUserIdFromName(commentEntry.placeholderOwner, users)._id
      commentEntry.ownerUsername = getUserIdFromName(commentEntry.placeholderOwner, users).username
      // console.log('COMMENT ENTRY AFTER', commentEntry)
    })


    const comments = await Comment.create(commentsSeed)
    console.log(`🌱 DATABASE SEEDED WITH ${comments.length} comments`)

    // console.log('COMMENTs', comments)

    
    const godsWithOwner = godsSeed.map(god => {
      return { ...god, owner: users[0]._id }
    })


    comments.map(entry => {
      // console.log('COMMENTS TYPE', typeof(god.comments))
      // console.log('Name', god.name)
      // console.log(matchGodToComment(god.name, comments))
      const godMatch = matchGodToComment(entry.placeholderAboutGod, godsWithOwner)
      console.log('COMMENT TO PUSH', godMatch)

      if (godMatch) {
        godMatch.comments.push(entry)
      } 
    })



    const gods = await God.create(godsWithOwner)
    console.log(`🌱 DATABASE SEEDED WITH ${gods.length} gods`)
    // console.log(`GODS ${gods}`)


    await mongoose.connection.close()
    console.log('🚪 CONNECTION CLOSED!!')


  } catch (err) {
    console.log('SEED ERROR', err)
    await mongoose.connection.close()
    console.log('🚪 CONNECTION CLOSED')
  }
  
}

seedDatabase()

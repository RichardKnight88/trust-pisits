import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  textHeader: { type: String, maxLength: 20 },
  placeholderOwner: { type: String }, 
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  ownerUsername: { type: String, required: true },
  placeholderAboutGod: { type: String }
  // aboutWhichGod: { type: mongoose.Schema.ObjectId, ref: 'God', required: true }
}, {
  timestamps: true
})


export default mongoose.model('Comment', commentSchema)
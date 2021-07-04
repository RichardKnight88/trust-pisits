import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const godsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  species: { type: String, required: true },
  logo: { type: String, required: true },
  image: { type: String },
  website: { type: String },
  godOf: [{ type: String, required: true }],
  description: { type: String, required: true, maxlength: 300 },
  symbol: [{ type: String, required: true }],
  sacredAnimals: [{ type: String }],
  locationName: { type: String, required: true },
  family: {
    parents: [{ type: String, required: true }],
    siblings: [{ type: String, required: true }],
    consort: [{ type: String }],
    children: [{ type: String }]
  },
  otherEquivalents: {
    romanEquivalent: { type: String },
    norseEquivalent: { type: String },
    slavicEquivalent: { type: String },
    hinduEquivalent: { type: String }
  },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
})


godsSchema.virtual('avgRating')
  .get(function () {
    if (!this.comments.length) return 'No ratings'

    const sum = this.comments.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0)

    return (sum / this.comments.length).toFixed(2)

  })

godsSchema.set('toJSON', {
  virtuals: true
})

export default mongoose.model('God', godsSchema)
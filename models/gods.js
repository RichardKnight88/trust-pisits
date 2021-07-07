import mongoose from 'mongoose'


const godsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  species: { type: String, required: true },
  logo: { type: String },
  image: { type: String },
  website: { type: String },
  godOf: [{ type: String, required: true }],
  description: { type: String, required: true, maxlength: 700 },
  symbol: [{ type: String }],
  // sacredAnimals: [{ type: String }],
  // locationName: { type: String, required: true },
  // family: {
  //   parents: [{ type: String, required: true }],
  //   siblings: [{ type: String, required: true }],
  //   consort: [{ type: String }],
  //   children: [{ type: String }]
  // },
  // media: {
  //   info: [{ type: String }],
  //   books: [{ type: String }],
  //   trivia: [{ type: String }]
  // },
  // otherEquivalents: {
  //   romanEquivalent: { type: String },
  //   norseEquivalent: { type: String },
  //   slavicEquivalent: { type: String },
  //   hinduEquivalent: { type: String }
  // },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: []
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
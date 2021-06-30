import mongoose from 'mongoose'
//import bcrypt when doing password encryption

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema
  //create virtual field called passwordConfirmation
  .virtual('passwordConfirmation')
  //setter uses function so we can use 'this'
  //sets the value the user inputs into password confirmation to the virtual field
  .set(function (passwordConfirmation) {
    // _passwordConfirmation refers to the virtual field
    // passwordConfirmation relates to user inputted value
    this._passwordConfirmation = passwordConfirmation
  })


export default mongoose.model('User', userSchema)
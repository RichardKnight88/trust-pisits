import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

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

userSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'Password does not match')
    }
    next()
  })

userSchema
  .pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', userSchema)
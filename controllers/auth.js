import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

// Registration
export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    return res.status(202).json({ message: `Welcome ${newUser.username}` })
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}


// Login
export const loginUser = async (req, res) => {
  try {
    const userToLogin = await User.findOne({ email: req.body.email })
    
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) throw new Error()

    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '5 days' })

    return res.status(202).json({ message: `Welcome back ${userToLogin.username}`, token })
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: 'Unauthorized' })
  }
}
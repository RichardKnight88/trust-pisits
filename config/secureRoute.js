import jwt from 'jsonwebtoken'
import { secret } from './environment.js'
import User from '../models/user.js'

export const secureRoute = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error('Missing headers')

    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('Token validation >>>', token)

    const payload = jwt.verify(token, secret)
    console.log('payload >>>', payload)

    const userToVerify = await User.findById(payload.sub)

    if (!userToVerify) throw new Error('User not found')

    console.log('userToVerify >>>', userToVerify)

    req.currentUser = userToVerify

    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

export const deusRoute = async (req, res, next) => {
  try {
    if (!req.currentUser.isDeusUser) throw new Error()
    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

// export const deusRoute = 
//if (req.currentUser.isDeusUser) 
// next() 
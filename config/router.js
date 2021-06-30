import express from 'express'
import User from '../models/user.js'

const getAllUsers = async (req, res) => {

  const users = await User.find()

  return res.status(200).json(users)
}

const router = express.Router()

router.route('/users').get(getAllUsers)


export default router
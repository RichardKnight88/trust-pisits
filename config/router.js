import express from 'express'
import { getAllUsers } from '../controllers/usersRequests.js'
import { getAllGods } from '../controllers/godsRequests.js'

const router = express.Router()

router.route('/users').get(getAllUsers)

router.route('/gods')
  .get(getAllGods)


export default router
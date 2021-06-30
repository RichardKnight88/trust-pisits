import express from 'express'
import { getAllUsers } from '../controllers/usersRequests.js'
import { getAllGods, getOneGod, addComment } from '../controllers/godsRequests.js'

const router = express.Router()

router.route('/users').get(getAllUsers)

router.route('/gods')
  .get(getAllGods)


router.route('/gods/:name')
  .get(getOneGod)

router.route('/gods/:name/comments')
  .post(addComment)


export default router



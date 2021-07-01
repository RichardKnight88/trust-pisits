import express from 'express'
import { getAllUsers } from '../controllers/usersRequests.js'
import { getAllGods, getOneGod, addComment, editComment, deleteComment } from '../controllers/godsRequests.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

router.route('/users').get(getAllUsers)

router.route('/gods')
  .get(getAllGods)

router.route('/gods/:name')
  .get(getOneGod)

router.route('/gods/:name/comments')
  .post(secureRoute, addComment)

router.route('/gods/:name/comments/:commentId')
  .put(secureRoute, editComment)
  .delete(secureRoute, deleteComment)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

export default router



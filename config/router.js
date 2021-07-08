import express from 'express'
import { getAllUsers, deleteUser, getOneUser } from '../controllers/usersRequests.js'
import { getAllGods, getOneGod, addComment, editComment, deleteComment, addGod, deleteGod, updateGod, getOneComment } from '../controllers/godsRequests.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute, deusRoute } from './secureRoute.js'

const router = express.Router()

router.route('/users')
  .get(getAllUsers)

router.route('/users/:id')
  .delete(secureRoute, deleteUser)

router.route('/profile')
  .get(secureRoute, getOneUser)

router.route('/gods')
  .get(getAllGods)
  .post(secureRoute, deusRoute, addGod)

//router addGodd
//  .post(secureRoute, deusRoute, addGod)

router.route('/gods/:name')
  .get(getOneGod)
  .delete(secureRoute, deusRoute, deleteGod)
  .put(secureRoute, deusRoute, updateGod)

router.route('/gods/:name/comments')
  .post(secureRoute, addComment)

router.route('/gods/:name/comments/:commentId')
  .get(getOneComment)
  .put(secureRoute, editComment)
  .delete(secureRoute, deleteComment)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)



export default router



import User from '../models/user.js'


export const getAllUsers = async (req, res) => {

  const users = await User.find()

  return res.status(200).json(users)
}

// ! DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const UserToDelete = await User.findById(id)
    if (!UserToDelete) throw new Error()
    console.log('UserToDelete >>', UserToDelete)

    console.log('req.currentUser._id >>', req.currentUser._id)
    console.log('req.currentUser.username >>', req.currentUser.username)

    if (UserToDelete._id.equals(req.currentUser._id) || req.currentUser.username === 'Admin') {
      console.log('AUTHORISED')
    } else {
      throw new Error('Unauthorised')
    }

    await UserToDelete.remove()
    return res.sendStatus(204)
    
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}


// ! GET ONE USER
export const getOneUser = async (req, res) => {
  try {
    const individualUser = await User.findById(req.currentUser._id).populate('userComments').populate('createdGods')
    if (!individualUser) throw new Error()
    return res.status(200).json(individualUser)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}
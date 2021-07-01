import God from '../models/gods.js'
import { caseInsensitiveName } from '../config/environment.js'

// ! GET ALL GODS
export const getAllGods = async (_req, res) => {
  const gods = await God.find()

  return res.status(200).json(gods)
}

// ! GET ONE GOD
export const getOneGod = async (req, res) => {

  try {
    const { name } = req.params

    const singleGod = await God.find({ name: caseInsensitiveName(name) }).populate('owner').populate('comments.owner')

    if (!singleGod) throw new Error()

    // console.log('SINGLE GOD', singleGod)
    // console.log('SINGLE GOD.COMMENTS', singleGod[0].comments)
    return res.status(200).json(singleGod)

  } catch (err) {
    console.log('GET ONE GOD ERROR', err)
    return res.status(404).json({ 'message': 'God not found' })
  }

}

// ! CREATE GOD
export const addGod = async (req, res) => {
  try {
    const godWithOwner = { ...req.body, owner: req.currentUser._id }
    const newGod = await God.create(godWithOwner)
    return res.status(201).json(newGod)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}


// ! ADDING COMMENT
export const addComment = async (req, res) => {

  try {
    const { name } = req.params
    const godToAddComment = await God.find({ name: caseInsensitiveName(name) })

    if (!godToAddComment) throw new Error('God does not exist')
    console.log('GOD ', godToAddComment)

    const commentToAdd = { ...req.body, owner: req.currentUser._id }
    // maybe add picture?
    console.log('COMMENT TO ADD', commentToAdd)
    console.log('GOD COMMENTS', godToAddComment[0].comments)
    console.log('GENDER', godToAddComment[0].gender)

    godToAddComment[0].comments.push(commentToAdd)

    await godToAddComment[0].save()

    return res.status(202).json(godToAddComment)

  } catch (err) {
    console.log('COMMENT ERROR', err)
    return res.status(401).json(err.message)
  }
}

// ! UPDATING COMMENT 
export const editComment = async (req, res) => {
  try {
    const { name, commentId } = req.params

    const godToEditComment = await God.find({ name: caseInsensitiveName(name) })
    if (!godToEditComment) throw new Error()

    const commentToEdit = godToEditComment[0].comments.id(commentId)
    if (!commentToEdit) throw new Error()

    const updatedComment = { owner: commentToEdit.owner._id, ...commentToEdit, ...req.body,  _id: commentToEdit._id } 
    if (updatedComment.owner === req.currentUser._id || req.currentUser.username === 'Admin' ) {
      console.log('authorization')
    } else {
      throw new Error('Unauthorized')
    }

    const indexOfCommentToEdit = godToEditComment[0].comments.indexOf(commentToEdit)

    godToEditComment[0].comments.splice(indexOfCommentToEdit, 1, updatedComment)
    
    await godToEditComment[0].save()
    return res.status(200).json(godToEditComment[0])
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}

// ! DELETE COMMENT
export const deleteComment = async (req, res) => {
  try {
    const { name, commentId } = req.params

    const godToDeleteComment = await God.find({ name: caseInsensitiveName(name) })
    if (!godToDeleteComment) throw new Error()

    const commentToDelete = godToDeleteComment[0].comments.id(commentId)
    if (!commentToDelete) throw new Error()
    if (commentToDelete.owner !== req.currentUser._id) throw new Error()

    await commentToDelete.remove()

    await godToDeleteComment[0].save()

    return res.status(202).json(godToDeleteComment)
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}
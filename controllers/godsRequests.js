import God from '../models/gods.js'
import Comment from '../models/comments.js'
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

    const singleGod = await God.findOne({ name: caseInsensitiveName(name) }).populate('owner')

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


// ! DELETE GOD
export const deleteGod = async (req, res) => {
  try {
    const { name } = req.params
    const godToDelete = await God.findOne({ name: caseInsensitiveName(name) })
    if (!godToDelete) throw new Error()
    // console.log('godToDelete >>', godToDelete)
    // console.log('godToDelete.owner >>', godToDelete.owner)
    // console.log('req.currentUser._id >>', req.currentUser._id)
    // console.log('req.currentUser.username >>', req.currentUser.username)

    if (godToDelete.owner.equals(req.currentUser._id) || req.currentUser.username === 'Admin') {
      console.log('AUTHORISED')
    } else {
      throw new Error('Unauthorised')
    }

    await godToDelete.remove()
    return res.sendStatus(204)
    
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}


// ! UPDATE GOD
export const updateGod = async (req, res) => {
  try {
    const { name } = req.params

    const godToUpdate = await God.findOne({ name: caseInsensitiveName(name) })
    if (!godToUpdate) throw new Error()

    if (godToUpdate.owner.equals(req.currentUser._id) || req.currentUser.username === 'Admin') {
      console.log('AUTHORISED')
    } else {
      throw new Error('Unauthorised')
    }

    const updatedGod = await God.findOneAndUpdate({ name: caseInsensitiveName(name) }, { ...req.body }, { new: true }) 
  
    return res.status(202).json({ message: updatedGod })
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}


// ! ADDING COMMENT
export const addComment = async (req, res) => {

  try {
    const { name } = req.params
    const godToAddComment = await God.findOne({ name: caseInsensitiveName(name) })

    if (!godToAddComment) throw new Error('God does not exist')
    // console.log('GOD ', godToAddComment)

    const commentToAdd = { ...req.body, owner: req.currentUser._id, ownerUsername: req.currentUser.username, placeholderAboutGod: godToAddComment.name }

    const newComment = await Comment.create(commentToAdd)
    // maybe add picture?
    // console.log('COMMENT TO ADD', commentToAdd)
    // console.log('GOD COMMENTS', godToAddComment.comments)
    // console.log('GENDER', godToAddComment.gender)

    godToAddComment.comments.push(newComment)

    await godToAddComment.save()

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

    const godToEditComment = await God.findOne({ name: caseInsensitiveName(name) })
    if (!godToEditComment) throw new Error()

    const commentToEdit = await Comment.findById(commentId)
    console.log('COMMENT', commentToEdit)
    if (!commentToEdit) throw new Error()

    const updatedComment = { ...commentToEdit._doc , owner: commentToEdit.owner, ...req.body, _id: commentToEdit._id } 

    if (updatedComment.owner.equals(req.currentUser._id) || req.currentUser.username === 'Admin') {
      console.log('AUTHORISED')
      await Comment.findOneAndUpdate({ _id: commentId }, { ...req.body }, { new: true }) 
    } else {
      throw new Error('Unauthorised')
    }

    // console.log('ID', commentId)
    // console.log('ID AGAIN', commentToEdit._id)
    // eslint-disable-next-line eqeqeq
    const indexOfCommentToEdit = godToEditComment.comments.findIndex(comment => comment._id == commentId)
    
    // console.log('GOD TO EDIT', godToEditComment.name)
    // console.log('GOD COMMENTS', godToEditComment.comments)
    // console.log('INDEX', indexOfCommentToEdit)
    // console.log('UPDATED COMMENT', updatedComment)

    godToEditComment.comments.splice(indexOfCommentToEdit, 1, updatedComment)
    
    await godToEditComment.save()
    return res.status(200).json(godToEditComment)
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}

// ! DELETE COMMENT
export const deleteComment = async (req, res) => {
  try {
    const { name, commentId } = req.params

    const godToDeleteComment = await God.findOne({ name: caseInsensitiveName(name) })
    if (!godToDeleteComment) throw new Error()
    // console.log('God to delete comment', godToDeleteComment)

    const commentToDelete = await Comment.findById(commentId)
    if (!commentToDelete) throw new Error()
    // console.log('comment to delete', commentToDelete)

    if (commentToDelete.owner.equals(req.currentUser._id) || req.currentUser.username === 'Admin') {
      console.log('AUTHORISED')
    } else {
      throw new Error('Unauthorised')
    }

    // eslint-disable-next-line eqeqeq
    const indexOfCommentToEdit = godToDeleteComment.comments.findIndex(comment => comment._id == commentId)

    godToDeleteComment.comments.splice(indexOfCommentToEdit, 1)


    await commentToDelete.remove()

    await godToDeleteComment.save()

    return res.status(202).json(godToDeleteComment)
    
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}
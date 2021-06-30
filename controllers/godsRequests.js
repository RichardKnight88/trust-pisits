import God from '../models/gods.js'
import { caseInsensitiveName } from '../config/environment.js'

export const getAllGods = async (_req, res) => {
  const gods = await God.find()

  return res.status(200).json(gods)
}

export const getOneGod = async (req, res) => {

  try {
    const { name } = req.params

    // const caseInsensitiveName = new RegExp(`^${name}$`, 'i')

    const singleGod = await God.find({ name: caseInsensitiveName(name) }).populate('owner').populate('comments.owner')

    if (!singleGod) throw new Error()

    console.log('SINGLE GOD', singleGod)
    return res.status(200).json(singleGod)

  } catch (err) {
    console.log('GET ONE GOD ERROR', err)
    return res.status(404).json({ 'message': 'God not found' })
  }

}

export const addComment = async (req, res) => {

  try {
    const { name } = req.params
    const godToAddComment = await God.find({ name: caseInsensitiveName(name) })

    if (!godToAddComment) throw new Error('God does not exist')
    console.log('GOD ', godToAddComment)

    const commentToAdd = { ...req.body, owner: godToAddComment[0]._id }
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

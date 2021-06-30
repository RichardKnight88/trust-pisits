import God from '../models/gods.js'

export const getAllGods = async (_req, res) => {
  const gods =  await God.find()

  return res.status(200).json(gods)
}


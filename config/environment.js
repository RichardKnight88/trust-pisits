import dotenv from 'dotenv'
dotenv.config()


export const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/godpilot-db-api'
export const port = process.env.PORT || 4000
export const secret = process.env.SECRET || 'ldn-56-supergroup'

export const caseInsensitiveName = (variable) => {
  return new RegExp(`^${variable}$`, 'i')
}


export const getUserIdFromName = (userNameVariable, arrayToFilter) => {
  const arrayFilterValue = arrayToFilter.filter(item => {
    if (item.username === userNameVariable ) {
      // console.log(item.username)
      return item._id
    } 
  })
  return arrayFilterValue[0]
}


export const matchGodToComment = (nameVariable, arrayToFilter) => {
  const arrayFilterValue = arrayToFilter.filter(item => {
    // console.log('nameVariable', nameVariable, item.name)
    // console.log('arrayToFilter', arrayToFilter)
    if (item.name === nameVariable ) {
      // console.log('YES')
      return item
    } 
  })
  // console.log('ARRAY FILTER VALUE', arrayFilterValue)
  return arrayFilterValue[0]
}





export const port = 4000


export const dbURI = 'mongodb://localhost/godpilot-db-api'


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
    console.log('nameVariable', nameVariable, item.name)
    // console.log('arrayToFilter', arrayToFilter)
    if (item.name === nameVariable ) {
      console.log('YES')
      return item
    } 
  })
  // console.log('ARRAY FILTER VALUE', arrayFilterValue)
  return arrayFilterValue[0]
}


export const secret = 'ldn-56-supergroup'


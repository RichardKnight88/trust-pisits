export const caseInsensitiveName = (variable) => {
  return new RegExp(`^${variable}$`, 'i')
}


export const getUserIdFromName = (userNameVariable, arrayToFilter) => {
  const arrayFilterValue = arrayToFilter.filter(item => {
    if (item.username === userNameVariable ) {
      return item._id
    } 
  })
  return arrayFilterValue[0]
}


export const matchGodToComment = (nameVariable, arrayToFilter) => {
  const arrayFilterValue = arrayToFilter.filter(item => {
    if (item.name === nameVariable ) {
      return item
    } 
  })
  return arrayFilterValue[0]
}
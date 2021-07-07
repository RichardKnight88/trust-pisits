const getTokenFromStorage = () => {
  return window.localStorage.getItem('token')
}

export const getPayload = () => {
  const token = getTokenFromStorage()

  if (!token) return
  
  const splitToken = token.split('.')
  console.log('splitToken >>>', splitToken)

  if (splitToken.length < 3) return
  return JSON.parse(atob(splitToken[1]))
}
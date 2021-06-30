export const port = 4000

export const dbURI = 'mongodb://localhost/godpilot-db-api'

export const caseInsensitiveName = (variable) => {
  return new RegExp(`^${variable}$`, 'i')
}


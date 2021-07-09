import React from 'react'
import { Rating } from 'semantic-ui-react'

export const definedRating = (rating) => (
  <Rating defaultRating={rating} maxRating={5} size='huge' disabled />
)

export const getUseableDate = (createdAt) => {
  // console.log('BITS', createdAt[0], createdAt[1])
  const dateSplit = createdAt.split('T')
  const dateGrab = dateSplit[0]
  // console.log('DATE', dateGrab)
  const year = dateGrab.split('-')[0]
  // console.log('year SPLIT', year)
  const month = dateGrab.split('-')[1]
  const monthNum = parseInt(month)
  // console.log('month SPLIT', month)
  const day = dateGrab.split('-')[2]
  // console.log('day SPLIT', day)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const useableDate = [day, months[monthNum - 1], year]
  const useableDateString = useableDate.join(' ')
  return useableDateString
}

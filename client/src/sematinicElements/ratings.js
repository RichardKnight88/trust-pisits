import React from 'react'
import { Rating } from 'semantic-ui-react'

export const definedRating = (rating) => (
  <Rating defaultRating={rating} maxRating={5} size='huge' disabled />
)

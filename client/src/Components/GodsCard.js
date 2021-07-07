/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Grid, Image, Segment, Icon, List, Popup, Label } from 'semantic-ui-react'
import { definedRating } from '../sematinicElements/ratings.js'

// COMPONENT SHOWING FILTERED GODS

const GodsCard = ( { name, avgRating, gender, comments }) => {

  const [nameWebsite, setNameWebsite] = useState(null)

  useEffect(() => {
    if (name && gender === 'Male') {
      console.log('theos.name >>>', name)
      setNameWebsite(`${name.toLowerCase()}.theos`)
    } else if (gender === 'Female') {
      setNameWebsite(`${name.toLowerCase()}.thea`)
    } else {
      setNameWebsite(`${name.toLowerCase()}.theoi`)
    }
  }, [name, gender])

  return (

    <div className='container info-page-container-margin'>

      <div className='info-page-width-two'>
        
        <Grid>
          <Grid.Row>
            <h3 className='result-box-heading-margin'>
              <Link to={`/gods/${name.toLowerCase()}`} className='engraved-two-normal-text'>
                {name}&nbsp;
                &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;&nbsp;
                {nameWebsite}
              </Link>
            </h3>
          </Grid.Row>

          <Grid.Row className='result-box-bottom-margin'>
            <>   
              {avgRating && 
                <div className='start-rating-info-positioning'>
                  <div>{definedRating(Math.round(avgRating))}</div>
                  <p>
                  &nbsp;&nbsp;
                    <span>{comments.length} reviews</span>&nbsp;&nbsp;
                    {avgRating !== 'No ratings' ? `|  TheioScore ${avgRating}` : ''}      
                  &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link>Write a review</Link>
                  </p>
                </div>
              }
            </>
          </Grid.Row>
        </Grid>
          
      </div>
    </div>

  ) 
}

export default GodsCard
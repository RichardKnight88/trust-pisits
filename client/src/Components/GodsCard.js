/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Grid, Image, Segment, Icon, List, Popup, Label } from 'semantic-ui-react'
import { definedRating } from '../sematinicElements/ratings.js'

// COMPONENT SHOWING FILTERED GODS

const GodsCard = ( { name, avgRating, gender, comments }) => {
  
  return (

    <div className='container info-page-container-margin'>

      <div className='info-page-width-two'>
        
        <Grid>
          <Grid.Row>
            <h3 className='result-box-heading-margin'>
              <Link to={`/gods/${name.toLowerCase()}`} className='engraved-two-normal-text'>
                {name}&nbsp;
                <span>|</span>&nbsp;
                {gender === 'Mixed' ? `${name.toLowerCase()}.theoi` : gender === 'Male' ? `${name.toLowerCase()}.theos` : `${name.toLowerCase()}.thea` }
              </Link>
            </h3>
          </Grid.Row>

          <Grid.Row className='result-box-bottom-margin'>
            <>   
              {avgRating && 
                <div className='start-rating-info-positioning'>
                  <div>{definedRating(Math.round(avgRating))}</div>
                  &nbsp;&nbsp;
                  <span>{comments.length} reviews</span>&nbsp;&nbsp;
                  {avgRating !== 'No ratings' ? `|  TheioScore ${avgRating}` : ''}      
                  &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link>Write a review</Link>
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
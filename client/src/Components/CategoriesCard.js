/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Grid, Image, Segment, Icon, List, Popup, Label } from 'semantic-ui-react'
import { definedRating } from '../sematinicElements/ratings.js'

// COMPONENT SHOWING FILTERED GODS

const CategoriesCard = ( { name, image, logo, species, avgRating, locationName }) => {
  
  return (
  // <div>
  //   <Link  to={`/gods/${name.toLowerCase()}`}>
        
  //     <h3 className="color">{name}</h3>
  //     {/* <img src={image} alt={name} title={name}/> */}
  //   </Link>
  // </div>

    <div>
      <Link to={`/gods/${name.toLowerCase()}`}>

        <div className='container'>
          <div className='info-page-width-category'>
            <Grid>
              <Grid.Column>
                <Segment>
                  <Grid columns={2} relaxed='very'>

                    <Grid.Column className='inner-divider-width-one-category'>
                      <Image src={logo} />
                    </Grid.Column>

                    <Grid.Column className='inner-divider-width-two'>
                      <div className='content-towards-logo'>
                        <h1 className='engraved-two-normal-text'>{name}</h1>
                        {/* <p>Reviews {theosCommentsLength}</p> */}

                        <>
                          {avgRating && 
                            <div className='start-rating-info-positioning'>
                              <div className='start-rating-info-positioning-padding'>{definedRating(Math.round(avgRating))}</div>
                              <div className='start-rating-info-positioning-padding engraved-two-normal-text'>{avgRating}</div>
                            </div>
                          }
                        </>

                        <div>{species}</div>

                        <div>{locationName}</div>
                      </div>
                    </Grid.Column>

                  </Grid>


                </Segment>
              </Grid.Column>
            </Grid>
          </div>
        </div>

      </Link>

      
    </div>
  ) 
}

export default GodsCard
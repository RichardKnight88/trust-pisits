/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Divider, Grid, Image, Segment, Icon, List, Popup, Label, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { definedRating, getUseableDate } from '../sematinicElements/ratings.js'
import { getPayload, checkUserIsAuthenticated } from './Authentification/auth'

// ! COMPONENT TO SHOW INDIVIDUAL THEOS (aka 'god' in Greek)

const GodsInfoPage = () => {

  const [theos, setTheos] = useState(null)
  const [theosToLowerCase, setTheosToLowerCase] = useState()
  const [theosCommentsLength, setTheosCommentsLength] = useState([])
  const [theosComments, setTheosComments] = useState([])
  const [jobs, setJobs] = useState([])
  const [hasError, setHasError] = useState(false)

  const [nameWebsite, setNameWebsite] = useState(null)

  const { name } = useParams()

  const getTwoLetters = (nameVariable) => {
    const lettersArray = [nameVariable[0], nameVariable[1]]
    const firstTwoLetters = lettersArray.join('')
    return firstTwoLetters
  }


  const [currentUserId, setCurrentUserId] = useState(null)

  useEffect(() => {
    if (getPayload()) {
      setCurrentUserId(getPayload().sub)
    }
  }, [])
  


  useEffect(() => {
    const getData = async () => {
      try {

        const { data } = await axios.get(`/api/gods/${name.toLowerCase()}`)
        setTheos(data)

        setTheosToLowerCase(data.name.toLowerCase())              // For styling purpose, not for semantic purpose.
        setTheosCommentsLength(data.comments.length)              // For styling purposes, not for semantic purpose. To see how many reviews are there.
        
        setTheosComments(data.comments)
        console.log('COMMENTS >> ', data.comments.ownerUsername)

        setJobs(data.godOf)

      
      } catch (err) {
        setHasError(true)
        console.log('i am not working properly >>', err.message)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    if (theosToLowerCase) {
      if (theos.gender === 'Male') {
        console.log('theos.name >>>', theos.name)
        setNameWebsite(`${theosToLowerCase}.theos`)
      } else if (theos.gender === 'Female') {
        setNameWebsite(`${theosToLowerCase}.thea`)
      } else {
        setNameWebsite(`${theosToLowerCase}.theoi`)
      }
    }
  }, [theosToLowerCase])


  return (
    
    <div>
      {theos ?
        <>
          <div className='display-heading-poisition'>
            <div className='info-page-width top-categories-spacing'>
              <h4>All &gt; Categories &gt; {theos.species} &gt; {theos.name}</h4>
            </div>
          </div>
          {/*  */}
          {/* Middle Grid */}
          <div className='display-heading-poisition'>
            <div className='info-page-width display-god-top-part-margin'>
              <Grid>
                <Grid.Column>
                  <Segment className='getting-rid-of-border changing-background-color'>
                    <Grid columns={2} relaxed='very'>

                      <Grid.Column className='inner-divider-width-one'>
                        <div className='no-logo-present'>
                          <Image src={theos.logo} className='gods-logo-postioning' />
                        </div>
                        
                      </Grid.Column>

                      <Grid.Column className='inner-divider-width-two'>
                        <div className='content-towards-logo'>
                          <h1>{theos.name}</h1>
                          <p>Reviews {theosCommentsLength}</p>

                          <>
                            {theos.avgRating && 
                            <div className='start-rating-info-positioning'>
                              <div className='start-rating-info-positioning-padding'>{definedRating(Math.round(theos.avgRating))}</div>
                              <div className='start-rating-info-positioning-padding'>{theos.avgRating}</div>
                              <div className='start-rating-info-positioning-padding'>
                                <Popup trigger={<Icon name='info circle' />}>
                                  <span className='popup-information-style engraved-two-normal-text'>
                              The <strong className='engraved-two-normal-text'>TheoiScore</strong> isn&apos;t just a simple average of all reviews. It&apos;s based on multiple factors like the age and number of reviews. Whether or not a God/Goddess actively asks worshipers to write reviews also impacts the TheoiScore.
                                  </span>
                                </Popup>
                              </div>
                            </div>
                            }

                          </>

                        </div>
                      </Grid.Column>

                    


                    </Grid>
                  </Segment>
                </Grid.Column>

                <Grid.Column className='info-page-width-two'>

                  
                  
                                
                  
                  {currentUserId === theos.owner._id ?

                                      
                    <Segment className='displaying-website'>
                      <Link to={`/create-god/${name}`}>
                        <Icon name='edit outline' />
                      </Link>
                    </Segment> 
                    :

                    ''
                  }

                  {
                    <Link to={{ pathname: `${theos.website}` }} target='_blank'>
                    
                      <Segment className='displaying-website'>
                        <div>
                          <div className='positioning-website-link'>
                            <Icon name='world icon' className='engraved' size='large'/>
                            <div className='website-link-size engraved-two-normal-text'>
                              {nameWebsite}
                            </div>
                          </div>
                          <div><p className='website-text-color'>Visit this website</p></div>
                        </div>
                        <Icon name='chevron right' size='large' className='engraved-two-normal-text'/>
                      </Segment>
                    
                    </Link>  
                  }
                  
                </Grid.Column>
              </Grid>
            </div>
          </div>
          

          {/* Bottom Grid */}
          <div className='body-color'>
            
            <div className='info-page-width'>
              <Grid>
                <Grid.Row className='flexing-mobile'>
                  <Grid.Column className='flexing-ipad'>
                    <Segment>
                      <div className='write-review-box-positioning'>
                        <div className='write-review-box-positioning-inner-box'>
                          <div><Image className='comment-picture-size' src='https://i.ibb.co/fHJphxZ/Comment-Picture.png' alt='comment-picture' /></div>
                          <div><Link className='hover-link-to-comment' to={`/gods/${theosToLowerCase}/comments`}>Write review</Link></div>
                        </div>
                        <div>
                          {<Rating 
                            maxRating={5} 
                            disabled
                            icon='star' 
                            size='massive'
                            
                          />}
                        </div>
                      </div>
                      
                      
                    </Segment>
                    <Segment>
                  BIG REVIEWS 
                      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                    {theosComments.map(comment => {
                      return (
                        <Segment key={comment._id}>
                          <Grid>
                            <Grid.Column>
                              {/* <div className='position-commentator'>
                                <Image src='https://i.ibb.co/kDvfxhz/comentator-profile.png' alt='comentator-picture' className='commentator-pic-background' />
                                <p className='comentator-picture-text-centered'>{getTwoLetters(comment.ownerUsername)}</p>
                              </div> */}
                              
                              <div className='user-comment-position'>
                                
                                <div className='user-comment-position-two'>
                                  <div className='user-comment-position-two-inner-one'>
                                    <div className='commentator-pic-background'>
                                      <h2 className='engraved'>{getTwoLetters(comment.ownerUsername).toUpperCase()}</h2>
                                    </div>
                                  </div>

                                  <div className='user-comment-position-two-inner-one'>
                                    <p>{comment.ownerUsername}</p>
                                  </div>
                                </div>
                              

                                <div className='edit-button'>
                                

                                  {currentUserId === comment.owner ?
     
                                    <Link to={`/gods/${theosToLowerCase}/comments/${comment._id}`}>
                                      <Icon name='edit outline' />
                                    </Link>
  
                                    :

                                    <Icon name='edit outline disabled' />
                                  }

                                </div>

                              </div>

                              
                            </Grid.Column>
                          </Grid>
                          <Divider horizontal className='horizontal-opacity'><span className='engraved-two-normal-text faded-omega-symbol'>&#8486;</span></Divider>
                          
                          <div className='rating-date'>
                            {
                              comment.rating &&  
                            <div className='start-rating-info-positioning-padding'>
                              {definedRating(comment.rating)}
                            </div>
                            }

                            <p className='engraved-two-normal-text size-date'>{getUseableDate(comment.createdAt)}</p>

                          </div>
                               
                          <div className='text-comment-area'>
                            <h6 className='engraved text-header-bold'>{comment.textHeader}</h6>
                            <p className="engraved-two-normal-text">{comment.text}</p>
                          </div>
                          <Divider horizontal className='horizontal-opacity'><span className='engraved-two-normal-text faded-omega-symbol'>&#8486;</span></Divider>
                        </Segment>
                      )
                    })}
                  </Grid.Column>
              
                  <Grid.Column className='info-page-width-two'>
                    <Segment>
                      <div>
                        Specialized in
                      </div>
                  
                      <div className='flexing-jobs-board'>
                        {jobs.map(job => {
                          return (
                              
                            <Label key={job} className='positioning-job-tags'>
                              <p className='engraved-two-normal-text'>{job}</p>
                            </Label>
                            
                          )
                        })}
                      </div>
                    </Segment>

                    <Segment>{theos.name}
                      <br />
                      <Segment className='getting-rid-of-border'>
                        <div>
                          <Image src={theos.image} alt={theos.name} className='god-picture-centered' /> 
                        </div>
                        <br />
                        <div>{theos.description}</div>
                      </Segment>

                      <Divider />

                      <Segment className='getting-rid-of-border'>
                        <Icon name='address card' />
                      Contact
                        <Segment className='getting-rid-of-border'>
                          <List>
                            <List.Item icon='map marker alternate' content={theos.locationName} />
                            <List.Item
                              icon='linkify'
                              content={<Link to={{ pathname: `${theos.website}` }} target='_blank'>
                                {nameWebsite}
                              </Link>}
                            />
                              
                          </List>
                        </Segment>
                      </Segment>

                      <Divider />

                      <Segment>Categories</Segment>
                    </Segment>
                    <Segment>About PilisTrust</Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
          
        </> 
        :

        hasError ?
          <h2>
          Something has gone wrong
          </h2> 

          :

          <img src='https://thumbs.gfycat.com/BareJoyousAsp.webp' alt='Rick And Morty'/>
      }
    </div>
  )
}
export default GodsInfoPage
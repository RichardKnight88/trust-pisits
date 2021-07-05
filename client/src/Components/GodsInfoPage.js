/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Divider, Grid, Image, Segment, Icon, List, Popup, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { definedRating } from '../sematinicElements/ratings.js'

// ! COMPONENT TO SHOW INDIVIDUAL THEOS (aka 'god' in Greek)

const GodsInfoPage = () => {

  const [theos, setTheos] = useState([])
  const [theosToLowerCase, setTheosToLowerCase] = useState()
  const [theosCommentsLength, setTheosCommentsLength] = useState([])
  const [theosComments, setTheosComments] = useState([])
  const [jobs, setJobs] = useState([])
  const [hasError, setHasError] = useState(false)

  const { name } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {

        const { data } = await axios.get(`/api/gods/${name.toLowerCase()}`)
        setTheos(data)

        setTheosToLowerCase(data.name.toLowerCase())              // For styling purpose, not for semantic purpose.
        setTheosCommentsLength(data.comments.length)              // For styling purposes, not for semantic purpose. To see how many reviews are there.
        
        setTheosComments(data.comments)

        setJobs(data.godOf)

      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])


  return (
    
    <div>
      <div className='container'>
        <div className='info-page-width top-categories-spacing'>
          <h4 className='categories-species-subheading'>Categories &gt; {theos.species}</h4>
        </div>
      </div>
      {/*  */}
      {/* Middle Grid */}
      <div className='container'>
        <div className='info-page-width'>
          <Grid>
            <Grid.Column>
              <Segment className='getting-rid-of-border'>
                <Grid columns={2} relaxed='very'>

                  <Grid.Column className='inner-divider-width-one'>
                    <Image src={theos.logo} />
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
                              <span className='popup-information-style engraved'>
                          The TheoiScore isn&apos;t just a simple average of all reviews. It&apos;s based on multiple factors like the age and number of reviews. Whether or not a business activelly asks customers to write reviews also impacts the TheoiScore.
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
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
          </Grid>
        </div>
      </div>
      

      {/* Bottom Grid */}
      <div className='body-color'>
        <div className='container'>
          <div className='info-page-width'>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Segment>Write Review</Segment>
                  <Segment>
              BIG REVIWES 
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  </Segment>
                  {theosComments.map(comment => {
                    return (
                      <Segment key={comment._id}>
                        <Grid>
                          <Grid.Column className='user-logo-commentarea-width '>
                            <div className="comment-profile-pic "></div>
                          </Grid.Column>
  
  
                          <Grid.Column>
                            <Grid.Column><p>User name</p></Grid.Column>
                            <Grid.Column>
                              <Grid divided='vertically'>
                                <Grid.Row columns={2}>
                                  <Grid.Column><p>NUMBER OF REVIEWS</p></Grid.Column>
                                  <Grid.Column><p>LOCATION</p></Grid.Column>
                                </Grid.Row>
                              </Grid>
                            </Grid.Column>
                          </Grid.Column>
                        </Grid>
                        <Divider horizontal className='horizontal-opacity'><span className='engraved-two-normal-text faded-omega-symbol'>&#8486;</span></Divider>
                        <h6 className='engraved text-header-bold'>{comment.textHeader}</h6>
                        <p className="engraved-two-normal-text">{comment.text}</p>
                        <Divider horizontal className='horizontal-opacity'><span className='engraved-two-normal-text faded-omega-symbol'>&#8486;</span></Divider>
                      </Segment>
                    )
                  })}
                </Grid.Column>
          
                <Grid.Column className='info-page-width-two'>
                  <Segment>Specialised in
                    <div className='flexing-jobs-board'>
                      {jobs.map(job => {
                        return (
                          
                          <Label key={job} className='positioning-job-tags'>
                            <p>{job}</p>
                          </Label>
                        
                        )
                      })}
                    </div>
                  </Segment>

                  <Segment>{theos.name}
                    <br />
                    <Segment>
                      <div>
                        <Image src={theos.image} alt={theos.name} className='god-picture-centered' /> 
                      </div>
                      <br />
                      <div>{theos.description}</div>
                    </Segment>
                    <Segment>
                      <Icon name='address card' />
                  Contact
                      <Segment>
                        <List>
                          <List.Item icon='map marker alternate' content={theos.locationName} />
                          <List.Item
                            icon='linkify'
                            content={<Link to={{ pathname: `${theos.website}` }} target='_blank'>{theosToLowerCase}.theoi</Link>}
                          />
                        </List>
                      </Segment>
                    </Segment>
                    <Segment>Categories</Segment>
                  </Segment>
                  <Segment>About PilisTrust</Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GodsInfoPage
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Divider, Grid, Image, Segment, Icon, List, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// ! COMPONENT TO SHOW INDIVIDUAL THEOS (aka 'god' in Greek)

const GodsInfoPage = () => {

  const [theos, setTheos] = useState([])
  const [theosToLowerCase, setTheosToLowerCase] = useState()
  const [hasError, setHasError] = useState(false)
  const { name } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/gods/${name.toLowerCase()}`)
        setTheos(data)
        setTheosToLowerCase(data.name.toLowerCase())        // For styling purpose, not for semantic purpose.
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [name])


  return (
    
    <div>
      <h1>Gods info page</h1>
      {/* Top Grid */}
      <div className='container'>
        <div className='info-page-width'>
          <Grid>
            <Grid.Column className='info-page-width-top'>
              <Segment className='getting-rid-of-border'>
                <Grid columns={2} relaxed='very'>
                  <Grid.Column className='inner-divider-width-one'>
                    <Image src={theos.logo} />
                  </Grid.Column>
                  <Grid.Column className='inner-divider-width-two'>
                    <div className='content-towards-logo'>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper lacinia ipsum vel efficitur. Suspendisse sed sollicitudin eros. Maecenas ut mauris egestas, hendrerit ligula ut, vestibulum velit. Sed mi libero, tincidunt vel nisi eu, gravida scelerisque orci. Maecenas dapibus pretium massa, vel vestibulum nisi malesuada eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam volutpat dignissim nisi et aliquet. Donec vel sagittis justo. Maecenas ullamcorper eget nunc id bibendum. Morbi vel consequat felis, aliquam finibus dolor. Pellentesque dignissim turpis auctor turpis sollicitudin, eget elementum ante porttitor.
                      </p>
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
                  <Segment>User Review</Segment>
                  <Segment>User Review</Segment>
                  <Segment>User Review</Segment>
                  <Segment>User Review</Segment>
                </Grid.Column>
          
                <Grid.Column className='info-page-width-two'>
                  <Segment>Business Transparency</Segment>
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
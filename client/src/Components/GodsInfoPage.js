/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Grid, Image, Segment, Icon, List, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// ! COMPONENT TO SHOW INDIVIDUAL THEOS (aka 'god' in Greek)

const GodsInfoPage = () => {

  const [theos, setTheos] = useState([])
  const [hasError, setHasError] = useState(false)
  const { name } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/gods/${name}`)
        setTheos(data)
        console.log('data.name >>', data.name)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [name])

  console.log('theos >>', theos)

  return (
    
    <div className='container'>
      <h1>Gods info page</h1>
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
                    <Image src={theos.image} /> 
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
                        content={<Link to={{ pathname: `${theos.website}` }} target='_blank'>{theos.name}.theoi</Link>}
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
  )
}
export default GodsInfoPage
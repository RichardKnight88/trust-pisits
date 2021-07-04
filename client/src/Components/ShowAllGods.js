// import React, { useEffect, useState } from 'react'
// import axios from 'axios'


// const ShowAllGods = () => {

//   const [gods, setGods] = useState([])

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axios.get('/api/gods')
//       setGods(data)
//     }
//     getData()
//   }, [])

//   return (
//     <>
//       <h1>Show all gods</h1>

//       {gods.map(item => <h1 key={item._id}>{item.name}</h1>)}
//     </>
//   )
// }
// export default ShowAllGods

import React, { useEffect, useState } from 'react'
import { Grid, Image, Segment, Icon, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShowAllGods = () => {

  const [gods, setGods] = useState([])
  const [oneGodName, setOneGodName] = useState()

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/gods/zeus')
      setGods(data)
      setOneGodName(data.name.toLowerCase())      // Did this just for the sake of styling purpose. Otherwise no semantic purpose.
    }
    getData()
  }, [])

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
              <Segment>{gods.name}
                <br />
                <Segment>
                  <div>
                    <Image src={gods.image} /> 
                  </div>
                  <br />
                  <div>{gods.description}</div>
                </Segment>
                <Segment>
                  <Icon name='address card' />
                  Contact
                  <Segment>
                    <List>
                      <List.Item icon='map marker alternate' content={gods.locationName} />
                      <List.Item
                        icon='linkify'
                        content={<Link to={{ pathname: 'https://en.wikipedia.org/wiki/Zeus' }} target='_blank'>{oneGodName}.com</Link>}
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

export default ShowAllGods
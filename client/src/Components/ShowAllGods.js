import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GodsCard from './GodsCard'


const ShowAllGods = () => {

  const [gods, setGods] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/gods')
      setGods(data)
    }
    getData()
  }, [])

  return (
    <>
      <h1>Show all gods</h1>

      <div>
        {gods.map(item => {
          return <GodsCard key={item._id} {... item} />
        })}
      </div>

    </>
  )
}
export default ShowAllGods

// import React, { useEffect, useState } from 'react'
// import { Grid, Image, Segment, Icon, List, Item } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
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
//     <div className='container'>
//       <h1>Gods info page</h1>
//       {gods.map(god =>
//         <div key={god._id}>
//           <div className='info-page-width'>
//             <Grid>
//               <Grid.Row>
//                 <Grid.Column>
//                   <Segment>Write Review</Segment>
//                   <Segment>
//               BIG REVIWES 
//                     <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//                   </Segment>
//                   <Segment>User Review</Segment>
//                   <Segment>User Review</Segment>
//                   <Segment>User Review</Segment>
//                   <Segment>User Review</Segment>
//                 </Grid.Column>
          
//                 <Grid.Column className='info-page-width-two'>
//                   <Segment>Business Transparency</Segment>
//                   <Segment>{god.name}
//                     <br />
//                     <Segment>
//                       <div>
//                         <Image src={god.image} /> 
//                       </div>
//                       <br />
//                       <div>{god.description}</div>
//                     </Segment>
//                     <Segment>
//                       <Icon name='address card' />
//                   Contact
//                       <Segment>
//                         <List>
//                           <List.Item icon='map marker alternate' content={god.locationName} />
//                           <List.Item
//                             icon='linkify'
//                             content={<Link to={{ pathname: `${god.website}` }} target='_blank'>{god.name.toLowerCase()}.theoi</Link>}
//                           />
//                         </List>
//                       </Segment>
//                     </Segment>
//                     <Segment>Categories</Segment>
//                   </Segment>
//                   <Segment>About PilisTrust</Segment>
//                 </Grid.Column>
          

//               </Grid.Row>
   
//             </Grid> 
//           </div>
//         </div>
//       ) }
//     </div>
// )
// }

// export default ShowAllGods
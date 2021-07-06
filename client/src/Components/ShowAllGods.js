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
        <div className='container'>
          <div className='info-page-width top-categories-spacing'>
            <h4 className='categories-species-subheading'>All &gt; Categories &gt; {gods.species}</h4>
          </div>
        </div>
      </div>
      <div>
        {gods.map(item => {
          return <GodsCard key={item._id} {... item} />
        })}
      </div>

    </>
  )
}
export default ShowAllGods


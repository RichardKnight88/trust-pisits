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
      <section className="wtf">
        {/* <h1>Show all gods</h1> */}
        {/* <div>
          <div className='container all-categories'>
            <div className='info-page-width top-categories-spacing '>
              <h4 className="categories-species-subheading allcategories">All &gt; Categories &gt; {gods.species}</h4>
            </div>
          </div>
        </div> */}
        <div className="gods-cards">
          {gods.map(item => {
            return <GodsCard className="card-foreachgod" key={item._id} {...item} />
          })}
        </div>
      </section>
    </>
  )
}
export default ShowAllGods


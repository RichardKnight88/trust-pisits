import React, { useEffect, useState } from 'react'
import axios from 'axios'


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

      {gods.map(item => <h1 key={item._id}>{item.name}</h1>)}
    </>
  )
}
export default ShowAllGods
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CategoriesCard from './CategoriesCard'

const FilteredGodsByCategory = () => {

  const [allData, setAllData] = useState([])
  const { categoryName } = useParams()

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('/api/gods')
        setAllData(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const category = allData.filter(species => {
    return species.species === categoryName
  })

  console.log(category)





  return (
    <>
      <div>
        <div className='container display-god-cards-categories'>
          <h1>{categoryName}</h1>

        </div>
      </div>
      <div className="gods-cards-display-all">
        {category.map(item => {
          return <CategoriesCard key={item._id} {...item} />
        })}
      </div>
    </>
  )
}
export default FilteredGodsByCategory
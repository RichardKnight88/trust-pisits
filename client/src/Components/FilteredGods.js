import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CategoriesCard from './CategoriesCard'

const FilteredGodsByCategory = () => {

  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState(allData)

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
      <h1>Show filtered gods</h1>
      <h1>Show all gods</h1>
      <div>
        <div className='container'>
          
        </div>
      </div>
      <div>
        {category.map(item => {
          return <CategoriesCard key={item._id} {... item} />
        })}
      </div>
    </>
  )
}
export default FilteredGodsByCategory
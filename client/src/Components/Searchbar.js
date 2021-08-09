/* eslint-disable no-unused-vars */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'


const Searchbar = ({ godsData }) => {

  const history = useHistory()



  const godNames = godsData.map(item => item.name)
  godNames.sort()


  const godSpecies = []

  godsData.map(item => {
    if (godSpecies.indexOf(item.species) < 0) {
      godSpecies.push(item.species)
    }
  })
  godSpecies.sort()


  const godOptions = godNames.map((item, index) => {
    return ({
      key: (item, index),
      value: item,
      text: item,
    })
  })



  const handleSubmit = (event, data) => {
    history.push(`/gods/${data.value}`)
  }




  return (
    <>

      <Dropdown
        placeholder='Search gods'
        fluid
        search
        selection
        header="---  Gods  ---"
        options={godOptions}
        className=" selection home-searchbar"
        onChange={handleSubmit}
        selectOnBlur={false}
        selectOnNavigation={false}
      />


    </>
  )
}

export default Searchbar



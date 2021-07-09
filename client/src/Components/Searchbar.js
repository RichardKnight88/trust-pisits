/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'


const Searchbar = ({ godsData }) => {

  const history = useHistory()

  // const [searchValue, setSeachValue] = useState(null)

  // console.log('GODS DATA', godsData)

  const godNames = godsData.map(item => item.name)
  godNames.sort()

  // console.log('GOD NAMES', godNames)

  const godSpecies = []

  godsData.map(item => {
    // console.log(item.species)
    if (godSpecies.indexOf(item.species) < 0) {
      // console.log('INDEX', categoriesArray.indexOf(item.species))
      godSpecies.push(item.species)
    }
  })
  godSpecies.sort()
  // console.log('GOD SPECIES', godSpecies)


  const godOptions = godNames.map((item, index) => {
    return ({
      key: (item, index),
      value: item,
      text: item,
    })
  })

  const speciesOptions = godSpecies.map((item, index) => {
    return ({
      key: (item, index),
      value: item,
      text: item,
    })
  })

  // console.log('GOD OPTIONS', godOptions)

  const handleSubmit = (event, data) => {
    console.log('VALUE', event.target)
    console.log('DATA', data)
    history.push(`/gods/${data.value}`)
  }

  // const handleSubmit2 = (event, data) => {
  //   console.log('VALUE', event.target)
  //   console.log('DATA', data)
  //   // history.push(`/categories/${data.value}`)
  // }

  // const handleChange = (event, data) => {
  //   // const searchTerm = ( ...searchValue, { data.value })
  //   // setSeachValue(searchTerm)
  //   console.log(data.searchQuery)
  // }




  return (
    <>
      {/* <form classNameName="home-searchbar">
        <input classNameName="searchbar" placeholder="God or god types" />

        <div classNameName="button-container">
          <button classNameName="hero-search-button">search</button>
        </div>
      </form> */}


      <Dropdown
        placeholder='Search gods'
        fluid
        search
        selection
        header="---  Gods  ---"
        options={godOptions}
        divider
        className=" selection home-searchbar"
        // onClick={handleSubmit}
        onChange={handleSubmit}
        selectOnBlur={false}
        selectOnNavigation={false}
      />

      {/* <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countryOptions}
      /> */}



      {/* <Dropdown 
        placeholder="Search gods or god types"
        fluid
        search
        selection
        aria-atomic="true"
        className='home-searchbar'
        value={searchValue}
        onSearchChange={handleChange}
        onChange={handleChange}
        noResultsMessage="NO"
      >
        <Dropdown.Menu>
          <Dropdown.Header 
            content='---  Gods  ---' />

          {godOptions.map(item => {
            return (
              <Dropdown.Item
                key={item.key}
                onClick={handleSubmit}
                value={item.value}
                role="option"
              >
                  
                {item.text}

              </Dropdown.Item>)
            
          })}
{}
          <Dropdown.Header
            content='---  god types ---' />

          {speciesOptions.map(item => {
            return (<Dropdown.Item key={item.key}
              onClick={handleSubmit2}
              value={item.value}>{item.text}</Dropdown.Item>)
            
          })}

        </Dropdown.Menu>
      </Dropdown> */}


    </>
  )
}

export default Searchbar



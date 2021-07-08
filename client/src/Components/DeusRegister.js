/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import { Button, Form, Divider } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import { faGenderless } from '@fortawesome/free-solid-svg-icons'
import { getTokenFromStorage } from './Authentification/auth'
import axios from 'axios'

// import { Link } from 'react-router-dom'


const options = [
  { key: 'nill', text: '...', value: 'nill' },
  { key: 'm', text: 'Man', value: 'Man' },
  { key: 'f', text: 'Woman', value: 'Woman' },
  { key: 'o', text: 'Mixed gender', value: 'Mixed' }

]

// const godOf = [
//   { text: 'Thunder', value: 'thunder' },
//   { text: 'Women', value: 'women' },
//   { text: 'Sea', value: 'sea' },
//   { text: 'Arts', value: 'arts' },
//   { text: 'Agriculture', value: 'agriculture' },
//   { text: 'Wisdom', value: 'wisdom' },
//   { text: 'Light', value: 'light' },
//   { text: 'Hunt', value: 'hunt' },
//   { text: 'War', value: 'war' },
//   { text: 'Beauty', value: 'beauty' },
//   { text: 'Invention', value: 'invention' },
//   { text: 'Wisdom', value: 'wisdom' }
// ]

const sacredAnimals = [
  { key: 'Eagle 🦅', value: 'eagle' },
  { key: 'Peacock 🦚', value: 'peacock' },
  { key: 'Horse 🎠', value: 'horse' },
  { key: 'Cow 🐄', value: 'cow' },
  { key: 'Serpent ⚕️', value: 'serpent' },
  { key: 'Owl 🦉', value: 'owl' }
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' }
]

const species = [
  { text: '...', value: 'nil' },
  { text: 'Primamordial Deity', value: 'primordial' },
  { text: 'Olympian', value: 'god' },
  { text: 'Giant', value: 'giant' },
  { text: 'Titan', value: 'titan' }
]

const DeusCreation = () => {

  const history = useHistory()

  const [godCreation, setGodCreationData] = useState({
    name: '',
    gender: '',
    species: '',
    godOf: [],
    description: '',
    locationName: '',
    image: '',
  }
  )
  // handling errors
  const [errors, setErrors] = useState('')

  // handling data from gods' creation
  const handleGodsData = (event) => {
    const getUserData = { ...godCreation, [event.target.name]: event.target.value }
    const newError = { ...errors, [event.target.name]: '' }
    setGodCreationData(getUserData)
    setErrors(newError)
  }

  // handling dropdown option 
  const handleDropdownMenu = (event, data) => {
    const getOption = { ...godCreation, [data.name]: data.value }
    console.log('event.target.name >>>', data)
    const newError = { ...errors, [event.target.name]: '' }
    setGodCreationData(getOption)
    setErrors(newError)
    console.log('DATA.VALUE >>', data.value)
  }
  console.log('godCreation', godCreation.gender)

  // submit data
  const submitGod = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/gods', godCreation,
        {
          headers: {
            Authorization: `Bearer ${getTokenFromStorage()}` },
        }
      )
      console.log('DATA >>', data)

      history.push(`/gods/${godCreation.name}`)
    } catch (err) {
      console.log(err)
      window.alert('Something went wrong.')
      setErrors(err.response.data.errors)
    }
  }

  console.log('NEW GOD >>', godCreation)

  return (
    <>

      <div className="main-creategod">
        <div className="box-creategod">

          <div className="container-creategod">
            <h1>Create a God</h1>
            <Form className="form-creategod" onSubmit={submitGod}>

              <Form.Field>
                <input 
                  label="Name of god" 
                  type="text" 
                  placeholder='Name of God' 
                  required 
                  name='name'
                  value={godCreation.name}
                  onChange={handleGodsData}
                />
              </Form.Field>

              <Form.Field>
                <input 
                  label="Picture of god" 
                  type="text" 
                  placeholder='Picture of God' 
                  required 
                  name='image'
                  value={godCreation.image}
                  onChange={handleGodsData}
                />
              </Form.Field>

              <Form.Select 
                fluid 
                options={options} 
                placeholder='Select a gender' 
                required 
                name='gender'
                onChange={handleDropdownMenu}
                value={godCreation.gender}
              />

              <Form.Select 
                fluid 
                options={species} 
                placeholder='Select species' 
                required 
                name='species'
                value={godCreation.species.value}
                onChange={handleDropdownMenu}
              />

              <Form.Field>
                <input 
                  type="text" 
                  placeholder='What is your God ruling?' 
                  required 
                  name='godOf'
                  value={godCreation.godOf}
                  onChange={handleGodsData}
                />
              </Form.Field>

              <Form.TextArea 
                type="text"
                placeholder='Please provide a description of the god selected...' 
                required 
                name='description'
                value={godCreation.description}
                onChange={handleGodsData}
              />

              <Form.Field>
                <input 
                  type="text" 
                  placeholder='Location' 
                  required 
                  name='locationName'
                  value={godCreation.locationName}
                  onChange={handleGodsData}
                />
              </Form.Field>

              {/* <Form.Field>
                <input 
                  type="text" 
                  placeholder='Parents' 
                  required 
                />
              </Form.Field>

              <Form.Field>
                <input 
                  type="text" 
                  placeholder='Siblings' 
                  required 
                  name='siblings'
                  value={godCreation.godOf}
                />
              </Form.Field> */}

              {/* <Link to="/gods"> */}
              <Button className="button-creategod formfield" angle double right type='submit'>
                Create a God
              </Button>
              {/* </Link> */}
              {/* <Divider horizontal>or</Divider> */}
            </Form>


            {/* <Button className="button-creategod formfield" type='submit'>Log in</Button> */}

          </div>
        </div>
      </div>
    </>
  )
}
export default DeusCreation
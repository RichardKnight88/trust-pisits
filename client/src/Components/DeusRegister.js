/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Button, Form, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// import { Link } from 'react-router-dom'

const options = [
  { key: 'nill', text: '...', value: 'nill' },
  { key: 'm', text: 'Man', value: 'man' },
  { key: 'f', text: 'Woman', value: 'woman' },
  { key: 'o', text: 'Mixed gender', value: 'mixed-gender' }

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

const DeusRegister = () => {

  return (
    <>

      <div className="main-creategod">
        <div className="box-creategod">

          <div className="container-creategod">
            <h1>Create a God</h1>
            <Form className="form-creategod">
              <Form.Field>
                <input label="Name of god" type="text" placeholder='Name of God' required />
              </Form.Field>

              <Form.Select fluid options={options} placeholder='Select a gender' required />

              <Form.Select fluid options={species} placeholder='Select species' required />

              <Form.Field>
                <input type="text" placeholder='What is your God ruling?' required />
              </Form.Field>

              <Form.TextArea placeholder='Please provide a description of the god selected...' required />

              <Form.Field>
                <input type="text" placeholder='Location' required />
              </Form.Field>

              <Form.Field>
                <input type="text" placeholder='Parents' required />
              </Form.Field>

              <Form.Field>
                <input type="text" placeholder='Siblings' required />
              </Form.Field>
              <Link to="/gods">
                <Button className="button-creategod formfield" angle double right type='submit'>
                  Create a God</Button>
              </Link>
              {/* <Divider horizontal>or</Divider> */}
            </Form>


            {/* <Button className="button-creategod formfield" type='submit'>Log in</Button> */}

          </div>
        </div>
      </div>
    </>
  )
}
export default DeusRegister
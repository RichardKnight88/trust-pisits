import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// import { Link } from 'react-router-dom'

const options = [
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
  { text: 'Eagle 🦅', value: 'eagle' },
  { text: 'Peacock 🦚', value: 'peacock' },
  { text: 'Horse 🎠', value: 'horse' },
  { text: 'Cow 🐄', value: 'cow' },
  { text: 'Serpent ⚕️', value: 'serpent' },
  { text: 'Owl 🦉', value: 'owl' }
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' },
  // { text: 'Eagle 🦅', value: 'eagle' }
]
class DeusRegister extends Component {

  state = {}

  // handleChange = (e, { value }) => this.setState({ value })

  render() {
    // const { value } = this.state
    return (
      <>
        <Form>
          {/* <Form.Field >
            <input fluid label="Name of God" placeholder="Name of God"/>
          </Form.Field> */}
          
          <Form.Field>
            <input label="Name of God" type="text" placeholder='Name of God' />
          </Form.Field>

          <Form.Select fluid options={options} placeholder='Select a gender' />

          <Form.Field>
            <input label="Species" type="text" placeholder="Assign a species" />
          </Form.Field>

          

          <Form.Select fluid label="God of" placeholder="God of" />
          <Form.Field label="Name of God" type="text" placeholder="God of" />
          {/* </Form.Field> */}

          <Form.TextArea label='Description' placeholder='Describe the god selected' />

          <Form.Select fluid label="Sacred animals" options={sacredAnimals} placeholder="What is your god's sacred animal?" />

        </Form>
        <Link to="/gods">
          <Button className="button-creategod formfield" type='submit'>Create a god</Button>
        </Link>
      </>
    )
  }

}

const DeusRegiste = () => {

  return (
    <h1>hello</h1>
    // <div className="main-creategod">
    //   <div className="box-creategod">

  //     <div className="container-creategod">
  //       <h1>Create a God</h1>
  //       <Form className="form-creategod">
  //         <Form.Field>
  //           <input className="formfield" type="text" placeholder='Name of God' required />
  //         </Form.Field>

  //         <Form.Field>
  //           <input className="formfield" type="text" placeholder='Email' required />
  //         </Form.Field>

  //         <Form.Field>
  //           <input className="formfield" type="password" placeholder='Password' required />
  //         </Form.Field>

  //         <Form.Field>
  //           <input className="formfield" type="password" placeholder='Confirm your password' required />
  //         </Form.Field>

  //         <Button className="button-creategod formfield" type='submit'>Create a God</Button>
  //         {/* <Divider horizontal>or</Divider> */}
  //       </Form>

  //       {/* <Link to="/login">
  //         <Button className="button-creategod formfield" type='submit'>Log in</Button>
  //       </Link> */}
  //     </div>
  //   </div>
  // </div>
  )
}
export default DeusRegister
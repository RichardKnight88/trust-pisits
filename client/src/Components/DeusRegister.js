import React from 'react'
import { Button, Form, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const DeusRegister = () => {

  return (
    <div className="main-creategod">
      <div className="box-creategod">

        <div className="container-creategod">
          <h1>Create a God</h1>
          <Form className="form-creategod">
            <Form.Field>
              <input className="formfield" type="text" placeholder='Username' required />
            </Form.Field>

            <Form.Field>
              <input className="formfield" type="text" placeholder='Email' required />
            </Form.Field>

            <Form.Field>
              <input className="formfield" type="password" placeholder='Password' required />
            </Form.Field>

            <Form.Field>
              <input className="formfield" type="password" placeholder='Confirm your password' required />
            </Form.Field>
            
            <Button className="button-creategod formfield" type='submit'>Create a God</Button>
            {/* <Divider horizontal>or</Divider> */}
          </Form>

          {/* <Link to="/login">
            <Button className="button-creategod formfield" type='submit'>Log in</Button>
          </Link> */}
        </div>
      </div>
    </div>
  )
}
export default DeusRegister

import React from 'react'
import { Button, Form, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const StandardRegister = () => (
  <div className="main-sregister">
    <div className="box-sregister">
      
      <div className="container-sregister">
        <h1>Create a free account</h1>
        <Form className="form-sregister">
          <Form.Field>
            {/* <label className="label-sregister">Username</label> */}
            <input className="formfield" type="text" placeholder='Username' required />
          </Form.Field>
          <Form.Field>
            {/* <label className="label-sregister">Email</label> */}
            <input className="formfield" type="text"  placeholder='Email' required />
          </Form.Field>
          <Form.Field>
            {/* <label className="label-sregister">Password</label> */}
            <input className="formfield" type="password"  placeholder='Password' required />
          </Form.Field>
          <Form.Field>
            {/* <label className="label-sregister">Confirm password</label> */}
            <input className="formfield" type="password"  placeholder='Confirm your password' required />
          </Form.Field>
          <Button className="button-sregister formfield" type='submit'>Create a free account</Button>
          <Divider horizontal>or</Divider>
        </Form>
        {/* <h4 className="already-login">Already have an account?<a href="Log in">Log in</Link></a> */}
        <Link to="/login">
          <Button className="button-sregister formfield register" type='submit'>Log in</Button>
        </Link>
        {/* </h4> */}
      </div>
    </div>
  </div>
)

export default StandardRegister
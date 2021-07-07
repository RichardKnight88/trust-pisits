import React from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="main-login">
      <div className="box-login">
        <h1>Log into your account</h1>
        <div className="form-box-login">
          <Form className="form-login">
            <Form.Field>
              <input name="users" className="formfield" type="text" rel="noreferrer"  placeholder='Username' required />
            </Form.Field>
            
            <Form.Field>
              <input className="formfield" type="password" placeholder='Password' required />
            </Form.Field>
          </Form>
          <Button className="button-login formfield" type='submit'>Log in</Button>
        </div>
        <Divider horizontal>Or</Divider>
        <Link to="/register">
          <Button className="wanttoregister" content='Want to register?' icon='signup' size='medium' />
        </Link>
      </div>
    </div>
  )

}
export default Login


// Message Richard Knight (he/him) - LDN, Vanja Tominc (she/her)











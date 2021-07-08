import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Button, Divider, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Login = () => {

  const history = useHistory()

  const [dataFromLogin, setDataFromLogin] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(false)

  const handleLoginData = (event) => {
    const newLoginData = { ...dataFromLogin, [event.target.name]: event.target.value }
    setDataFromLogin(newLoginData) 
  }

  const submitLogin = async event => {
    event.preventDefault()

    try {
      const { data } = await axios.post('/api/login', dataFromLogin)
      // console.log(dataFromLogin)
      setToken(data.token)
      history.push('/home')

    } catch (err) {
      console.log(err)
      setErrors(true)
      window.alert('Your email or password is wrong.')
    }
  }

  const setToken = (token) => {
    window.localStorage.setItem('token', token)
    console.log('TOKEN WE GET >>>', token)
  }

  


  return (
    <div className="main-login">
      <div className="box-login">
        <h1>Log into your account</h1>
        <div className="form-box-login">

          <Form className="form-login" onSubmit={submitLogin}>

            <Form.Field>
              <input 
                name="email" 
                className="formfield" 
                type="text" 
                // rel="noreferrer"  
                placeholder='Email' 
                value={dataFromLogin.email}
                required 
                onChange={handleLoginData}
              />

              {errors.email && <p>{errors.email.message}</p>}
            </Form.Field>
            
            <Form.Field>
              <input 
                name='password'
                className="formfield" 
                type="password" 
                placeholder='Password' 
                value={dataFromLogin.password}
                required 
                onChange={handleLoginData}
              />

              {errors.password && <p>{errors.password.message}</p>}
            </Form.Field>

            <Button className="button-login formfield" type='submit'>Log in</Button>

          </Form>
          
        </div>
        <Divider horizontal><div className="divider-word"></div>Or</Divider>
        <Link to="/register">
          <Button className="wanttoregister" content='Want to register?' icon='signup' size='medium' />
        </Link>
      </div>
    </div>
  )

}
export default Login


// Message Richard Knight (he/him) - LDN, Vanja Tominc (she/her)











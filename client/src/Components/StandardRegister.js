import React, { useState } from 'react'
import { Button, Form, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'




const StandardRegister = () => {

  const history = useHistory()

  // Handling user input
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isDeusUser: false,
  })

  // Handling error
  const [errors, setErrors] = useState('')

  // Handling with data that comes through the registration
  const handleRegisterData = (event) => {
    const getUserData = { ...registerData, [event.target.name]: event.target.value }
    const newError = { ...errors, [event.target.name]: '' }
    setRegisterData(getUserData)
    setErrors(newError)
  }


  // Submit data from register to the backend
  const submitForm = async event => {
    event.preventDefault()
    try {
      await axios.post('/api/register', registerData)
      const response = await axios.post('/api/login', { email: registerData.email, password: registerData.password })
      window.localStorage.setItem('token', response.data.token)
      history.push('/home')
    } catch (err) {
      console.log(err)
      window.alert('Your email or username is already in use.')
      setErrors(err.response.data.errors)
    }
  }

  console.log('DATA FROM REGISTER >>>', registerData)

  return (
    <>
      <div className="main-sregister">
        <div className="box-sregister">
      
          <div className="container-sregister">
            <h1>Create a free account</h1>

            <Form className="form-sregister" onSubmit={submitForm}>

              <Form.Field>
                {/* <label className="label-sregister">Username</label> */}
                <input 
                  className="formfield" 
                  type="text" 
                  placeholder='Username' 
                  name='username' 
                  value={registerData.username}
                  required 
                  onChange={handleRegisterData} />
              </Form.Field>

              <Form.Field>
                {/* <label className="label-sregister">Email</label> */}
                <input 
                  className="formfield" 
                  type="text"  
                  placeholder='Email' 
                  name='email' 
                  value={registerData.email}
                  required 
                  onChange={handleRegisterData} />
              </Form.Field>

              <Form.Field>
                {/* <label className="label-sregister">Password</label> */}
                <input 
                  className="formfield" 
                  type="password"  
                  placeholder='Password' 
                  name='password' 
                  value={registerData.password}
                  required 
                  onChange={handleRegisterData} />
              </Form.Field>

              <Form.Field>
                {/* <label className="label-sregister">Confirm password</label> */}
                <input 
                  className="formfield" 
                  type="password"  
                  placeholder='Confirm your password' 
                  name='passwordConfirmation' 
                  value={registerData.passwordConfirmation}
                  required 
                  onChange={handleRegisterData} />
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
    </>
  )
}
  


export default StandardRegister
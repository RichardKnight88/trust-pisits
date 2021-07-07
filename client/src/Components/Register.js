import React, { useState } from 'react'
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
    isDeusUser: false
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
      window.localStorage.setItem('token', data.token)
      history.push('/home')
    } catch(err) {
      console.log(err)
      setErrors(err.response.data.errors)
    }
  }




  return ()


}


export default Register
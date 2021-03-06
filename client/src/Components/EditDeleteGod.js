import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromStorage } from './Authentification/auth'
import { Button, Form } from 'semantic-ui-react'


const options = [
  { key: 'm', text: 'Man', value: 'Man' },
  { key: 'f', text: 'Woman', value: 'Woman' },
  { key: 'o', text: 'Mixed gender', value: 'Mixed' }

]

const species = [
  { text: '...', value: 'nil' },
  { text: 'Primamordial Deity', value: 'primordial' },
  { text: 'Olympian', value: 'god' },
  { text: 'Giant', value: 'giant' },
  { text: 'Titan', value: 'titan' }
]


const DeleteEditGod = () => {

  const { name } = useParams()
  const history = useHistory()
  // const redirect = Redirect()


  // ! Update God

  const [godToEdit, setGodToEdit] = useState(
    {
      
      gender: '',
      species: '',
      godOf: [],
      description: '',
      locationName: '',
      image: '',
    }
  )

  const [errors, setErrors] = useState({
    
    gender: '',
    species: '',
    godOf: [],
    description: '',
    locationName: '',
    image: '',
  })

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/gods/${name}`)
      setGodToEdit(data)
    }
    getData()
  }, [name])

  console.log('Incoming Data >>>', godToEdit)

  const handleTextChange = (event) => {
    const newGodData = { ...godToEdit, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setGodToEdit(newGodData)
    setErrors(newErrors)
  }

  const handleDropwDownMenu = (event, data) => {
    const newGetOption = { ...godToEdit, [data.name]: data.value }
    const newError = { ...errors, [event.target.name]: '' }
    setGodToEdit(newGetOption)
    setErrors(newError)
  }

  const handleUpdate = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`/api/gods/${name}`, godToEdit,
        {
          headers: {
            Authorization: `Bearer ${getTokenFromStorage()}` },
        }
      ) 
      history.push(`/gods/${name}`)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  const goBack = () => {
    history.goBack()
  }

  // ! Deleting God

  const deleteGod = async() => {
    try {
      await axios.delete(`/api/gods/${name}`, {
        headers: {
          Authorization: `Bearer ${getTokenFromStorage()}` },
      })
      history.push('/home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>

      <div className="main-creategod">
        <div className="box-creategod">

          <div className="container-creategod">
            <h1>Update or Delete your God</h1>
            <Form className="form-creategod" onSubmit={handleUpdate}>
              {/* onSubmit={handleUpdate} */}
              <Form.Field>
                <input 
                  label="Name of god" 
                  type="text" 
                  placeholder='Name of God' 
                  required 
                  name='name'
                  disabled
                  value={godToEdit.name}
                  onChange={handleTextChange}
                />
              </Form.Field>

              <Form.Field>
                <input 
                  label="Picture of god" 
                  type="text" 
                  placeholder='Picture of God' 
                  required 
                  name='image'
                  value={godToEdit.image}
                  onChange={handleTextChange}
                />
              </Form.Field>

              <Form.Select 
                fluid 
                options={options} 
                placeholder={godToEdit.gender}
                required 
                name='gender'
                onChange={handleDropwDownMenu}
                value={godToEdit.gender}
              />

              <Form.Select 
                fluid 
                options={species} 
                placeholder={godToEdit.species}
                required 
                name='species'
                value={godToEdit.species.value}
                onChange={handleDropwDownMenu}
              />

              <Form.Field>
                <input 
                  type="text" 
                  placeholder='What is your God ruling?' 
                  required 
                  name='godOf'
                  value={godToEdit.godOf}
                  onChange={handleTextChange}
                />
              </Form.Field>

              <Form.TextArea 
                type="text"
                placeholder='Please provide a description of the god selected...' 
                required 
                name='description'
                value={godToEdit.description}
                onChange={handleTextChange}
              />

              <Form.Field>
                <input 
                  type="text" 
                  placeholder='Location' 
                  required 
                  name='locationName'
                  value={godToEdit.locationName}
                  onChange={handleTextChange}
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
              
              <div className='spacing-buttons-update-delete-god'>
                <Button className='button-width-god' type='submit'>Submit</Button>
                <Button className='button-width-god' type='submit' onClick={goBack}>Cancel</Button>
                <Button className='comment-submit-button button-width-god' type='submit' onClick={deleteGod}>Delete</Button>
              </div>
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


export default DeleteEditGod
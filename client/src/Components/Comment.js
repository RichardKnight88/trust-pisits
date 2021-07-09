import React, { useState, useEffect  } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { Button, Form, Segment, Rating, Modal } from 'semantic-ui-react'
import { getTokenFromStorage } from './Authentification/auth'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Comment = () => {

  console.log('pageview >>>', location.pathName)

  const { name } = useParams()

  const history = useHistory()

  // Handling user input
  const [commentData, setCommentData] = useState({
    text: '',
    rating: '',
    textHeader: '',
  })

  // Handling error
  const [errors, setErrors] = useState('')


  const [open, setOpen] = React.useState(false)


  // Handling incoming data from comment section
  const handleCommentData = (event) => {
    //console.log('NAME OF THE COMMENT >>', event.target.name)
    const getUserComment = { ...commentData, [event.target.name]: event.target.value }
    //console.log('getUserComment >>>', getUserComment)
    const newError = { ...errors, [event.target.name]: '' }
    setCommentData(getUserComment)
    setErrors(newError)
  }

  // Submit data from comment to the backend
  const setComment = async (event, data) => {
    try {
      event.preventDefault()
      const token = window.localStorage.getItem('token')
      // console.log('TOKEN >>>', token)
      console.log('DATA >>>', data)
      // console.log('EVENT.TARGET.NAME >>', event.target.target)
      await axios.post(`/api/gods/${name}/comments`, commentData, 
        {
          headers: {
            Authorization: `Bearer ${token}` },
        }
      ) 
      
  
      history.push(`/gods/${name}`)
    } catch (err) {
      console.log(err)
      // setErrors(err.response.data.errors)
      window.alert('Something went wrong 😬')
    }
  }


  const checkingRating = (event, data) => {
    const getRatingNumber = { ...commentData, [data.name]: data.rating }
    console.log('data >>>', data)
    const newError = { errors, [event.target.name]: '' }
    setCommentData(getRatingNumber)
    setErrors(newError)
  }

  

  return (

    <>
      
      <div className='comment-top-box'>
        
      
        <div className="main-login">

          <Segment className='comment-box'>
      
            <div className="container-area-text">
              <h1 className='comment-heading'>{name.toUpperCase()}</h1>
              <h3 className='comment-heading'>Rate your recent experience</h3>


              <Form onSubmit={setComment}>

                {<Rating 
                  maxRating={5} 
                  
                  icon='star' 
                  size='massive'
                  name='rating' 
                  rating={commentData.rating}
                  onRate={checkingRating}
                />}
             

                <h3 className='comment-heading'>Tell us about your experience</h3>

                <div className='max-comment-form-width'>
                  <Form.TextArea
                    fluid 
                    className='form-field-height'
                    type="text"
                    placeholder='This is where you write your review. Explain what happened, and leave out offensive words. Keep your feedback honest, helpful, and constructive.' 
                    required 
                    name='text'
                    value={commentData.text}
                    onChange={handleCommentData}
                  />
                </div>

               

                <Modal
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  trigger={<p className='paragrapgh-modal'>How to write a useful review</p>}
                  className='modalHeight'
                >
                  <Modal.Header>8 tips for writing great customer reviews</Modal.Header>
                  <Modal.Content>
        
        
          
                    <p>1. Provide useful, constructive feedback</p>
                    <p>2. Talk about a range of elements, including customer service</p>
                    <p>3. Be detailed, specific, and honest</p>
                    <p>4. Leave out links and personal information</p>
                    <p>5. Keep it civil and friendly</p>
                    <p>6. Feel free to update your review if needed</p>
                    <p>7. Check you’ve got the right domain name or company</p>
                    <p>8. Proofread your review</p>
        
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
          Ok
                    </Button>
                  </Modal.Actions>
                </Modal>

                <h3 className='comment-heading'>Give your review a title</h3>
                
                <Form.Field>
                  <input
                    type="text" 
                    placeholder='Write the title of your review here?' 
                    required 
                    name='textHeader'
                    value={commentData.textHeader}
                    onChange={handleCommentData}
                  />
                </Form.Field>

                <Button type='submit'>Submit</Button>
              </Form>

            </div>
          </Segment>
        </div>
      </div>
    </>
  )
}

export default Comment
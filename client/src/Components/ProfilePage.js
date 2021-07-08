import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { getCurrentUser } from './Authentification/auth'
import { Rating } from 'semantic-ui-react'

const ProfilePage = () => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getCurrentUserData = async () => {
      const currentUserData = await getCurrentUser()

      setCurrentUser(currentUserData)
    }
    getCurrentUserData()

  }, [])

  currentUser && console.log('USER', currentUser, currentUser.username)


  return (
    <>

      <section className="user-summary-container">

        {currentUser &&
          <>
            <div className="user-summary-content-container engraved">

              <div className="profile-pic-container">

                {currentUser.profilePicture
                  ?
                  <img className="profile-pic" src={currentUser.profilePicture} alt="blank avatar" />
                  :
                  <img className="profile-pic" src="https://i.ibb.co/fHJphxZ/Comment-Picture.png" alt="blank avatar" />
                }

              </div>


              <div className="username-container">
                <div className="username-text">{currentUser.username}</div>
              </div>

              <div className="reviews-container">

                <div className="review-content-container">

                  <div className="review-number">{currentUser.userComments.length}</div>
                  <div className="review-text"><Rating defaultRating={1} maxRating={1} size='huge' disabled /> 
                  Reviews</div>

                </div>

              </div>

            </div>
          </>

        }

      </section >
    </>
  )
}
export default ProfilePage
import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { getCurrentUser } from './Authentification/auth'

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

      < section className="user-summary-container">
        {currentUser &&

          <div className="user-summary-content-container">

            <div className="profile-pic-container">
              <div className="profile-pic"></div>
            </div>

            <div className="username-container">
              <h1 className="username-text">{currentUser.username}</h1>
            </div>

            <div className="reviews-container">

              <div className="review-content-container">

                <div className="review-number"></div>
                <div className="review-text"></div>

              </div>

            </div>

          </div>
        }

      </section>
    </>
  )
}
export default ProfilePage
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getCurrentUser } from './Authentification/auth'

const ProfilePage = () => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const currentUserData = async () => {

      await getCurrentUser()
    }

    setCurrentUser(currentUserData)

  }, [])

  currentUser && console.log('USER', currentUser)

  
  return (
    <>
      {/* <h1>Profile page</h1> */}

      <section className="user-summary-container">

        <div className="user-summary-content-container">

          <div className="profile-pic-container">
            <div className="profile-pic"></div>
          </div>

          <div className="username-container">
            <div className="username-text"></div>
          </div>

          <div className="reviews-container">

            <div className="review-content-container">

              <div className="review-number"></div>
              <div className="review-text"></div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}
export default ProfilePage
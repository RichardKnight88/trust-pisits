import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { getCurrentUser, getTokenFromStorage, getTwoLetters } from './Authentification/auth'
import { Rating, Icon } from 'semantic-ui-react'
import { definedRating, getUseableDate } from '../sematinicElements/ratings.js'


const ProfilePage = () => {

  const [currentUser, setCurrentUser] = useState(null)

  const history = useHistory()

  useEffect(() => {
    const getCurrentUserData = async () => {
      const currentUserData = await getCurrentUser()

      setCurrentUser(currentUserData)
    }
    getCurrentUserData()

  }, [])

  // currentUser && console.log('USER', currentUser, currentUser.username)

  return (
    <>
      <div className="body">
        {currentUser &&
          <>
            <section className="user-summary-container">

              <div className="user-summary-content-container engraved">

                <div className="profile-pic-container">

                  {currentUser.profilePicture
                    ?
                    <img className="profile-pic" src={currentUser.profilePicture} alt="blank avatar" />
                    :
                    <div className='commentator-pic-background'>
                      <h2 className='engraved'>{getTwoLetters(currentUser.username)}</h2>
                    </div>
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
              {/* </> */}

            </section >


            <section className="profile-body-section-container columns is-full">

              <div className="profile-body-container column is-half is-offset-2">

                <div className="review-block-container">
                  <>
                    {currentUser.userComments.map(item => {
                      return (
                        <>
                          {console.log(item._id)}
                          <div key="item._id" className="review-of-text">

                            Review of <Link to={`/gods/${item.placeholderAboutGod.toLowerCase()}`}>{item.placeholderAboutGod}</Link>
                          </div>

                          <div className="review-card">

                            <div className="review-card-header">
                              <>
                                {currentUser.profilePicture
                                  ?
                                  <img className="profile-pic-in-card" src={currentUser.profilePicture} alt="blank avatar" />
                                  :
                                  <div className='commentator-pic-background'>
                                    <h2 className='engraved'>{getTwoLetters(currentUser.username)}</h2>
                                  </div>
                                }

                                <div className="review-header-username">{item.ownerUsername}</div>

                              </>

                            </div>

                            <div className="review-card-body-container">

                              <div className="review-card-body-rating-date">

                                <div className="review-card-rating">
                                  {definedRating(item.rating)}
                                </div>

                                <div className="review-card-date">
                                  {getUseableDate(item.createdAt)}
                                </div>

                              </div>

                              <div className="review-text-container">

                                {item.heading &&
                                  <div className="review-heading">{item.heading}</div>
                                }

                                <div className="review-card-text">{item.text}</div>

                              </div>

                            </div>

                            <div className="review-card-buttons-container">

                              <div className="review-card-button">
                                <Link to={`/gods/${item.placeholderAboutGod.toLowerCase()}/comments/${item._id}`}>
                                  <Icon name='edit outline' />
                                  <p>Edit</p>
                                </Link>
                              </div>

                              <div className="review-card-button" onClick={async () => {
                                if (window.confirm('Are you sure you want to delete?')) {
                                  await axios.delete(`/api/gods/${item.placeholderAboutGod}/comments/${item._id}`, {
                                    headers: {
                                      Authorization: `Bearer ${getTokenFromStorage()}`,
                                    },
                                  })
                                  history.go(0)
                                }
                              }}>
                                <Icon name='trash alternate outline' />
                                <p>Delete</p>
                              </div>


                            </div>


                          </div>
                        </>
                      )
                    })
                    }
                  </>
                </div>


              </div>


            </section>

          </>
        }

      </div>
    </>
  )
}
export default ProfilePage
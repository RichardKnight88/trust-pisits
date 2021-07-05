/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { definedRating } from '../sematinicElements/ratings.js'



const Home = () => {

  const [comments, setComments] = useState([])
  const [errors, setErrors] = useState(false)

  const inputRef = useRef()

  console.log('INPUTREF', inputRef)

  // const { offsetLeft } = inputRef.current

  // console.log('offsetLeft', offsetLeft)



  useEffect(() => {

    const getData = async () => {
      setErrors(false)
      try {

        const { data } = await axios.get('/api/gods')

        // console.log('GET RQST DATA', data)

        // console.log('DATA', data.filter(item => item.comments.length > 0))

        const godsWithActiveComments = data.filter(item => item.comments.length > 0)

        const commentsArray = []

        // console.log('COMMENTS', godsWithActiveComments.map(item => item.comments))

        const commentsFromGods = godsWithActiveComments.map(item => item.comments)

        commentsFromGods.map(item => item.map(comment => {
          commentsArray.push(comment)
        }))

        // console.log('COMMENTS ARRAY', commentsArray)
        // console.log('COMMENTS ARRAY', commentsArray.map(item => item.text))

        setComments(commentsArray)
        // setComments(data.map(item => item.comments.map(item => item)))

      } catch (err) {
        console.log('COMMENTS ERROR', err.message)
        setErrors(true)
      }
    }

    getData()

  }, [])

  return (
    <>
      <>
        <section className="hero-container">

          <div className='search-container'>

            <div className="search-container-content">

              <h2 className="search-header">Behind every review is an experience that matters</h2>

              <h2 className="search-subheader">Read reviews. Write reviews. Find gods.</h2>

              <div className="searchBar-container">
                <form className="home-searchbar">
                  <input className="searchbar" placeholder="God or god types" />

                  <div className="button-container">
                    <button className="hero-search-button">search</button>
                  </div>
                </form>
              </div>


              <div className="categories-continer">

                <div className="categories-tagline">
                  Browse gods by category
                </div>

                <div className="categories-button-container">

                  <Link to="/categories">
                    <div className="category-button">
                      Primordial
                    </div>
                  </Link>

                  <Link to="/categories">
                    <div className="category-button">
                      Olympian
                    </div>
                  </Link>

                  <Link to="/categories">
                    <div className="category-button">
                      Titan
                    </div>
                  </Link>

                  <Link to="/categories">
                    <div className="category-button">
                      Giant
                    </div>
                  </Link>


                </div>

              </div>

            </div>

          </div>

        </section>

        <section>

          <div className="comments-container-heading">
            Recent reviews
          </div>

          {comments &&

            <div className='scrolling-comments-container'>

              {comments.map(item =>
                <>
                  <div key={item._id} className="comment-div">
                    {/* {console.log('POSITION', item.getBoundingClientRect())} */}
                    <>
                      {/* {const {offsetLeft} = inputRef.current} */}
                      {/* {console.log('OFFSET LEFT', offsetLeft)} */}
                    </>
                    <div className="comment-header">
                      <div className="comment-profile-pic "></div>
                      <div className="comment-rating">{definedRating(item.rating)}</div>
                    </div>
                    <div className="engraved comment-owner-text">
                      <p>
                        <span className="bold">Person </span>  reviewed  <span className="bold">God</span>
                      </p>
                    </div>

                    <h4 className="engraved">{item.text}</h4>

                  </div>
                </>
              )}
            </div>
          }
        </section>

        <section className="home-banner">

          <div className="home-banner-inner">

            <div className="home-banner-container">

              <h2>Be heard</h2>

              <p>Trust Pistis is free and open to every god and follower everywhere. Sharing your experiences helps others make better choices and gods up their game.</p>

              <Link to="/about">
                <div className="banner-button">
                  What we do
                </div>
              </Link>

            </div>

            <div className="home-banner-container trust">

              <h2>We protect and promote trust</h2>

              <p>Trust Pistis is based on Trustpilot</p>

              <a href="https://www.trustpilot.com/">
                <div className="banner-button">
                  Take a look
                </div>
              </a>

            </div>

          </div>

        </section>

      </>
    </>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getPayload } from './Authentification/auth'
import { Image } from 'semantic-ui-react'

const Navbar = () => {

  const [hideNavbar, setHideNavbar] = useState('')

  const history = useHistory()
  const location = useLocation()

  const checkUserIsAuthenticated = () => {

    const payload = getPayload()

    if (!payload) return

    const currentTime = Math.round(Date.now() / 1000)
    return currentTime < payload.exp

  }


  const [burger, setBurger] = useState('')

  const toggleBurger = () => {
    if (burger === '') setBurger('is-active')
    if (burger === 'is-active') setBurger('')
  }

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/home')
    location.pathname
  }

  const homeCheck = () => {
    burger && toggleBurger()
  }

  useEffect(() => {
    const toggleNavbar = () => {
      if (location.pathname === '/' || location.pathname === '/create-god') {
        setHideNavbar('hidenav')
      } else {
        setHideNavbar('')
      }
    }
    toggleNavbar()
  }, [location])

  return (

    <header>
      <nav className='navbar is-fixed-top is-dark is-transparent' id={hideNavbar}>
        <div className='container'>
          <div className='navbar-brand' id="start-icon">
            <div className="navbar-item" onClick={homeCheck}>
              {/* <Link to="/" className="navbar-item engraved-two-normal-text">Landing Page</Link> */}
              <Link to="/home" className="navbar-item engraved-two-normal-text">
                <Image src='https://i.ibb.co/878JXTf/Logo-Image.png' alt='Logo-Image' />
              </Link>
            </div>
            <div onClick={toggleBurger} className={`navbar-burger ${burger}`} data-target='theoi-navbar'>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>


          <div id='theoi-navbar' onClick={toggleBurger} className={`navbar-menu ${burger} engraved-two-normal-text`}>

            <div className='navbar-end'>
              <Link to="/gods" className="navbar-item engraved-two-normal-text hover-effect-link" >Search All Gods</Link>

              {/* <Link to="/categories" className="navbar-item engraved-two-normal-text">Categories</Link> */}

              {/* <Link to="/profile" className="navbar-item engraved-two-normal-text">Profile</Link> */}

              {/* {checkUserIsAuthenticated() ?

                <Link
                  to='/home'
                  className="navbar-item engraved-two-normal-text"
                  onClick={handleLogout}
                >

                  Log out

                </Link>

                :

                <Link to="/login" className="navbar-item engraved-two-normal-text">Login</Link>
              } */}
              {/* <Link to="/login" className="navbar-item engraved-two-normal-text">Login</Link> */}

              {/* <Link to="/register" className="navbar-item engraved-two-normal-text">Register</Link> */}

              {/* <Link to="/deus_register" className="navbar-item engraved-two-normal-text">Deus Register</Link> */}

              {/* <Link to="/categories/:category_name" className="navbar-item engraved-two-normal-text">Gods filtered by category</Link> */}

              {/* <Link to="/about" className="navbar-item engraved-two-normal-text">This is the about page</Link> */}
              <Link to="/business" className="navbar-item engraved-two-normal-text">Are you a God?</Link>

              {checkUserIsAuthenticated() ?
                <>
                  <Link to="/profile" className="navbar-item engraved-two-normal-text">Profile</Link>

                  <Link
                    to='/home'
                    className="navbar-item engraved-two-normal-text"
                    onClick={handleLogout}
                  >
                    Log out

                  </Link>
                </>

                :

                <Link to="/login" className="navbar-item engraved-two-normal-text">Login</Link>
              }
            </div>

          </div>
        </div>
      </nav>
    </header>

    // <nav className="navbar is-fixed-top is-dark">
    //   <div className="container">
    //     <div className="navbar-brand">
    //       <Link to="/" className="navbar-item">LandingPage</Link>
    //     </div>

    //     <div className="navbar-brand">
    //       <Link to="/home" className="navbar-item">Home</Link>
    //     </div>

    //     <div className="navbar-brand">
    //       <Link to="/gods" className="navbar-item">Gods</Link>
    //     </div>

    //     <div className="navbar-brand">
    //       <Link to="/categories" className="navbar-item">Categories</Link>
    //     </div>

    //     <div className="navbar-brand">
    //       <Link to="/profile" className="navbar-item">Profile</Link>
    //     </div>

    //     <div className="navbar-brand">
    //       <Link to="/login" className="navbar-item">Login</Link>
    //     </div>

    //     <div className="navbar-brand">
    //       <Link to="/register" className="navbar-item">Register</Link>
    //     </div>

    //     <div className="navbar-brand">
    //       <Link to="/deus_register" className="navbar-item">Deus Register</Link>
    //     </div>

    //     <div className="navbar-brand">
    //       <Link to="/categories/:category_name" className="navbar-item">Gods filtered by category</Link>
    //     </div>

    //     <div className="navbar-brand">
    //       <Link to="/about" className="navbar-item">This is the about page</Link>
    //     </div>

    //   </div>
    // </nav>

  )
}
export default Navbar
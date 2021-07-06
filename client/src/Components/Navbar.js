import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [burger, setBurger] = useState('')

  const toggleBurger = () => {
    if (burger === '') setBurger('is-active')
    if (burger === 'is-active') setBurger('')
  }


  return (

    <header>
      <nav className='navbar is-fixed-top is-dark is-transparent'>
        <div className='container'>
          <div className='navbar-brand'>
            <div className="navbar-item">
              <Link to="/" className="navbar-item engraved-two-normal-text">LandingPage</Link>
              <Link to="/home" className="navbar-item engraved-two-normal-text">Home</Link>
            </div>
            <div onClick={toggleBurger} className={`navbar-burger ${burger}`} data-target='theoi-navbar'>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>


          <div id='theoi-navbar' className={`navbar-menu ${burger} engraved-two-normal-text`}>
          
            <div className='navbar-end'>
              <Link to="/gods" className="navbar-item engraved-two-normal-text">Gods</Link>
              <Link to="/categories" className="navbar-item engraved-two-normal-text">Categories</Link>
              <Link to="/profile" className="navbar-item engraved-two-normal-text">Profile</Link>
              <Link to="/login" className="navbar-item engraved-two-normal-text">Login</Link>
              <Link to="/register" className="navbar-item engraved-two-normal-text">Register</Link>
              <Link to="/deus_register" className="navbar-item engraved-two-normal-text">Deus Register</Link>
              <Link to="/categories/:category_name" className="navbar-item engraved-two-normal-text">Gods filtered by category</Link>
              <Link to="/about" className="navbar-item engraved-two-normal-text">This is the about page</Link>
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
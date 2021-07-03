import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {



  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">LandingPage</Link>
        </div>

        <div className="navbar-brand">
          <Link to="/home" className="navbar-item">Home</Link>
        </div>

        <div className="navbar-brand">
          <Link to="/gods" className="navbar-item">Gods</Link>
        </div>

        <div className="navbar-brand">
          <Link to="/categories" className="navbar-item">Categories</Link>
        </div>

        <div className="navbar-brand">
          <Link to="/profile" className="navbar-item">Profile</Link>
        </div>

        <div className="navbar-brand">
          <Link to="/login" className="navbar-item">Login</Link>
        </div>

        <div className="navbar-brand">
          <Link to="/register" className="navbar-item">Register</Link>
        </div>

        <div className="navbar-brand">
          <Link to="/deus_register" className="navbar-item">Deus Register</Link>
        </div>

        <div className="navbar-brand">
          <Link to="/categories/:category_name" className="navbar-item">Gods filtered by category</Link>
        </div>

        <div className="navbar-brand">
          <Link to="/about" className="navbar-item">This is the about page</Link>
        </div>

      </div>
    </nav>

  )
}
export default Navbar
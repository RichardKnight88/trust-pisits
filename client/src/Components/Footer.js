import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {

  const [hideNavbar, setHideNavbar] = useState('')

  const location = useLocation()

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

    <footer className="footer footer-color footer-footer" id={hideNavbar}>
      <div className="has-text-centered">
        <p className='engraved-two-normal-text'>
          © TRUST PISTIS  by&nbsp;
          <Link to={{ pathname: 'https://www.linkedin.com/in/adrian-pantea-23391b9a/' }} target='_blank'><strong className='engraved-two-normal-text'>Adrian Pantea</strong></Link>,&nbsp;
          <Link to={{ pathname: 'https://www.linkedin.com/in/vanja-tominc-28286b210/' }} target='_blank'><strong className='engraved-two-normal-text'>Vania Tominc</strong></Link>&nbsp;and&nbsp;
          <Link to={{ pathname: 'https://www.linkedin.com/in/richard-knight-0094ba91/' }} target='_blank'><strong className='engraved-two-normal-text'>Richard Knight</strong></Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
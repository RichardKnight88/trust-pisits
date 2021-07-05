import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  return (

    <footer className="footer footer-color footer-footer">
      <div className="has-text-centered">
        <p>
          PILIS TRUST by&nbsp;
          <Link to={{ pathname: 'https://www.linkedin.com/in/adrian-pantea-23391b9a/' }} target='_blank'>Adrian Pantea</Link>,&nbsp;
          <Link to={{ pathname: 'https://www.linkedin.com/in/vanja-tominc-28286b210/' }} target='_blank'>Vania Tominc</Link>&nbsp;and&nbsp;
          <Link to={{ pathname: 'https://www.linkedin.com/in/richard-knight-0094ba91/' }} target='_blank'>Richard Knight</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
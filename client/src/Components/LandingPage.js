import React from 'react'
import { Link } from 'react-router-dom'
// import Tilt from 'react-tilt'
import { Button } from 'semantic-ui-react'
const LandingPage = () => {

  return (
    <>
      <div className="landingcontainer">
        <section className="landingPage-body">
          <div className="wrapper">
            <div className="cube-area">
              <div className="second-box second-box-front"></div>
              <div className="box box-front god"></div>
              <div className="second-box second-box-right"></div>
              <div className="box box-right god"></div>
              <div className="second-box second-box-back"></div>
              <div className="box box-back god"></div>
              <div className="second-box second-box-left"></div>
              <div className="box box-left god"></div>
              <div className="second-box second-box-top"></div>
              <div className="box box-top god"></div>
              <div className="second-box second-box-bottom"></div>
              <div className="box box-bottom god"></div>
            </div>
          </div>
          <div className="landingbutton-position">
            <Link to="/home">
              <div >
                <Button className="landingpage-button fade-in" content='Click to enter website' size='medium' />
              </div>
            </Link >
          </div>
        </section>
      </div>
    </>
  )
}
export default LandingPage
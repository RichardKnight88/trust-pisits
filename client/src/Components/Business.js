import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Tilt from 'react-tilt'


const Business = () => {

  return (

    <>
      <section className="business-container">
        <div className="business-box">
          <div className="business-brand">


            <h1 className="god-brand">
              Grow brand trust.
            </h1>


            <h1 className="grof-brand">
              Grof brand trust.
            </h1>
            {/* </div> */}

            <h4 className="pilis">PilisTrust reviews get you closer <br /> &nbsp; to your customers and power <br /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your business forward</h4>

            <div className="business-login-register">

              <Link to="/login">
                <Button className="business-login-formfield business-login" type='submit'>Log in</Button>
              </Link>

              <Link to="/deus_register">
                <Button className="business-register-formfield" content='Want to register?' icon='signup' size='medium' />
              </Link>

            </div>
          </div>

        </div>
        {/* add 2 buttons (login and register) */}
        {/* </div> */}
        {/* <div className="business-login-register"> */}

        {/* </div> */}
      </section>

      <section className="number-reviews">
        <div className="first-number">
          <h1>+6.9 billion</h1>
          <p><b>review impressions every month </b></p>
          <p>Over 6.9 billion Pilis Trust review impressions <br /> every month </p>
        </div>

        <div className="second-number">
          <h1>4 million</h1>
          <p><b>new reviews per month</b></p>
          <p>4 million new reviews are posted on Pilis Trust <br /> each month </p>
        </div>

        <div className="third-number">
          <h1>Every second</h1>
          <p><b>somebody shares a new review on Pilis Trust</b></p>
          <p>More than 529,000 websites are reviewed <br /> on PilisTrust </p>
        </div>
      </section>

      <section className="confidence-container">
        <div className="customer-confidence">

          <div className="first-confidence">

            <div className="confidence-box">
              <h1><b>Create customer confidence<br /> with Pilis Trust</b></h1>
              <p>Built on honesty and transparency, PilisTrust is the people&apos;s<br />choice for reviews</p>
              <p>With over 529,000 businesses reviewed and 1.1 trillion <br /> ratings and reviews displayed in google annually, companies <br /> use PilisTrust to establish credibility and improve their reputation</p>
            </div>
            <Link to="/home">
              <button FcRight className="button-confidence">Check our features</button>
            </Link>
          </div>
          {/* <div className="divider-confidence">
            <Divider vertical>Or</Divider>
          </div> */}
          <div className="godcards-confidence">

            <div className="zeus-card-image">
              <div className="image-confidence"></div>


              <Tilt className="Tilt card-about-wrapper" options={{ max: 15 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner">
                  <div className="prometheus-card-image">


                    <div className="secondimage-confidence"></div>

                  </div>
                </div>
              </Tilt>

            </div>



          </div>

        </div>
      </section>


    </>
  )
}


export default Business
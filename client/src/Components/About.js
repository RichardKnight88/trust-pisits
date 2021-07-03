import React from 'react'
import Adrian from '../Images/Developers/Adrian.jpeg'
import Vanja from '../Images/Developers/Vanja.jpeg'
import Richard from '../Images/Developers/Richard.png'
import Tilt from 'react-tilt'





const About = () => {

  return (
    <>
      <body className="aboutPage-body">
        <div className="container-about">
          <div className="card-about">
            <div className="content-about">
              <div className="imgBx-about"><img src={Adrian} /></div>
              <div className="contentBx-about">
                <h3>Adrian Pantea<br /><span>Junior Full-Stack Software Engineer</span></h3>
              </div>
            </div>
            <ul className="sci-about">
              <li styles="--i:1">
                <a href="https://www.linkedin.com/in/adrian-pantea-23391b9a/"><i className="fa fa-linkedin-square linkedin"
                  aria-hidden="true"></i></a>
              </li>
              <li styles="--i:2">
                <a href="https://github.com/adrianp2021"><i className="fa fa-github github" aria-hidden="true"></i></a>
              </li>
              <li styles="--i:3">
                <a href="https://twitter.com/AdrianPantea4"><i className="fa fa-twitter twitter" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>

          <div className="card-about">
            <div className="content-about">
              <div className="imgBx-about"><img src={Vanja} /></div>
              <div className="contentBx-about">
                <h3>Vanja Tominc<br /><span>Junior Full-Stack Software Engineer</span></h3>
              </div>
            </div>
            <ul className="sci-about">
              <li styles="--i:1">
                <a href="https://www.linkedin.com/in/vanja-tominc-28286b210/"><i className="fa fa-linkedin-square linkedin"
                  aria-hidden="true"></i></a>
              </li>
              <li styles="--i:2">
                <a href="https://github.com/VaniaTominc"><i className="fa fa-github github" aria-hidden="true"></i></a>
              </li>
              <li styles="--i:3">
                <a href="#"><i className="fa fa-twitter twitter" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>

          <div className="card-about">
            <div className="content-about">
              <div className="imgBx-about"><img src={Richard} /></div>
              <div className="contentBx-about">
                <div data-tilt>
                  <h3>Richard Knight<br /><span>Junior Full-Stack Software Engineer</span></h3>
                </div>
              </div>
            </div>
            <ul className="sci-about">
              <li styles="--i:1">
                <a href="https://www.linkedin.com/in/richard-knight-0094ba91/"><i className="fa fa-linkedin-square linkedin"
                  aria-hidden="true"></i></a>
              </li>
              <li styles="--i:2">
                <a href="https://github.com/RichardKnight88"><i className="fa fa-github github" aria-hidden="true"></i></a>
              </li>
              <li styles="--i:3">
                <a href="#"><i className="fa fa-twitter twitter" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </body>
      <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"> 👽 </div>
      </Tilt>
    </>
  )
}
export default About
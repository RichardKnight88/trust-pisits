import React from 'react'
import Tilt from 'react-tilt'

import Adrian from '../Images/Developers/Adrian.jpeg'
import Vanja from '../Images/Developers/Vanja.png'
import Richard from '../Images/Developers/Richard.png'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(fas, fab)

const About = () => {

  const creators = [
    {
      name: 'Adrian Pantea',
      image: Adrian,
      content: 'Junior Full-Stack Developer',
      social: {
        twitter: 'https://twitter.com/AdrianPantea4',
        linkedin: 'https://www.linkedin.com/in/adrian-pantea-23391b9a/',
        github: 'https://github.com/adrianp2021',
      },
    },
    {
      name: 'Vanja Tominc',
      image: Vanja,
      content: 'Junior Full-Stack Developer',
      social: {
        linkedin: 'https://www.linkedin.com/in/vanja-tominc-28286b210/',
        github: 'https://github.com/VaniaTominc',
      },
    },
    {
      name: 'Richard Knight',
      image: Richard,
      content: 'Junior Full-Stack Developer',
      social: {
        linkedin: 'https://www.linkedin.com/in/richard-knight-0094ba91/',
        github: 'https://github.com/RichardKnight88',
      },
    }
  ]

  return (
    <section className="aboutpage-body">
      <div className="container-about">
        {creators.map((creator, i) => {
          return (
            <Tilt className="Tilt card-about-wrapper" key={i} options={{ max: 25 }} style={{ height: 250, width: 250 }} >
              <div className="Tilt-inner">
                <div className="card-about">
                  <div className="content-about">
                    <div className="imgBx-about"><img src={creator.image} /></div>
                    <div className="contentBx-about">
                      <h3>{creator.name}<br /><span>{creator.content}</span></h3>
                    </div>
                  </div>
                  <ul className="sci-about">
                    <li styles="--i:1">
                      <a className="linkedin" href={creator.social.linkedin} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    </li>
                    <li styles="--i:2">
                      <a className="linkedin" href={creator.social.github} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    </li>
                    <li styles="--i:3">
                      <a className="twitter" href={creator.social.twitter} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </Tilt>
          )
        })}
      </div>
    </section>
  )
}
export default About





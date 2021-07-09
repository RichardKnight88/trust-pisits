/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { Divider, Grid, Image, Segment, Icon, List, Popup, Label, Card.Group,  } from 'semantic-ui-react'
import { CardGroup, CardContent, CardHeader, CardMeta, CardDescription, Divider } from 'semantic-ui-react'
import { definedRating } from '../sematinicElements/ratings.js'

// COMPONENT SHOWING FILTERED GODS

const GodsCard = ({ name, avgRating, gender, comments }) => {

  const [nameWebsite, setNameWebsite] = useState(null)

  useEffect(() => {
    if (name && gender === 'Male') {
      console.log('theos.name >>>', name)
      setNameWebsite(`${name.toLowerCase()}.theos`)
    } else if (gender === 'Female') {
      setNameWebsite(`${name.toLowerCase()}.thea`)
    } else {
      setNameWebsite(`${name.toLowerCase()}.theoi`)
    }
  }, [name, gender])

  return (

    <div className='container info-page-container-margin '>

      {/* <div className='info-page-width-two'> */}

      {/* <Grid> */}
      {/* <Grid.Row> */}


      <CardGroup className="card-foreachgod">

        <CardContent >
          <CardHeader className="header-godname">
            {/* <h3 className='result-box-heading-margin'> */}
            <Link to={`/gods/${name.toLowerCase()}`}>
              <CardMeta className="engraved-two-normal-text">
                {name}&nbsp;
                &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;&nbsp;
                {nameWebsite}
              </CardMeta>
            </Link>

            {/* </h3> */}
          </CardHeader>
          {/* </Grid.Row> */}

          {/* <Grid.Row className='result-box-bottom-margin'> */}
          {/* <> */}

          <CardMeta>
            {avgRating &&
              <div className='start-rating-info-positioning'>

                <CardDescription className="rating-stars">{definedRating(Math.round(avgRating))}
                  {/* <Card.Meta> */}

                  <p>

                    {/* &nbsp;&nbsp; */}
                    <CardMeta>
                      <div className="number-of-reviews">
                        {comments.length} reviews&nbsp;&nbsp;
                        {avgRating !== 'No ratings' ? `|  TheioScore ${avgRating}` : ''}
                        &nbsp;&nbsp;<span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <Divider></Divider>
                      <Link to="/gods/:name/comments">Write a review</Link>
                    </CardMeta>
                  </p>
                </CardDescription>
                {/* </Card.Meta> */}
              </div>
            }
          </CardMeta>
          {/* <Divider></Divider> */}
          {/* </> */}
          {/* </Grid.Row> */}
          {/* </Grid> */}
        </CardContent>

      </CardGroup>
    </div>
    // </div>

  )
}

export default GodsCard
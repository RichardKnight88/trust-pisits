# Trust Pistis
Software Engineering Immersive Course || Project-3 || Group Project - 3 Members || 1 week

## Overview

An app based on 'Trust Pilot' that allows users the ability to rate and create Greek Gods. Named after the Greek God of trust - Pistis.
 
<p align="center" >
 <img width="80%" src="./client/src/Images/trust-pistis-hero-screenshot.png" alt="Trust Pistis Hero Screenshot"/>
</p>
 
[Trust Pistis - Deployed App](https://bit.ly/trust-pistis)
 
 
## Table of Contents
[The Brief](#the-brief) <br>
[The Build](#the-build) <br>
[Wins](#wins) <br>
[Challenges](#challenges) <br>
[Bugs](#bugs) <br>
[Future Improvements](#future-improvements) <br>
[Key Learnings](#key-learnings) <br>

 
 
## The Brief
 
As a group, create a Fullstack application with CRUD functionality using the MERN stack - MongoDB, Express, React & Node.


<br>
 
## The Build

When discussing what kind of app we would like to create, we discovered a shared interest in mythology.

We combined this with the Trust Pilot theme - because some Greek Gods can be trusted more than others.

With Trust Pilot there are two user types - standard users who can add reviews and businesses who can create pages for review. We decided to have 'Deus Users' - Gods - who could create God (business) accounts.

I created a Trello board and we discussed all of the functionality and structure we expected for the project.

We decided to build the backend together so that we were all aware of how it functioned and could interact with it appropriately when allocating frontend tasks.

We each had a day where we would code while the others supported. This was incredibly useful in practice as other team members could catch small spelling errors in real time and give suggestions or guidance.

We used the Trello board as a Kanban for the frontend, where each member would assign the task to themselves and move it into the 'In Progress' column.

An important part of the Trust Pilot website is the comments. These have a relationship with both the 'Gods' and the 'User'. As I had expressed a desire to work on the homepage - which has comments scrolling across the page - I revisited the backend to add this functionality and created a third schema, comments.

This facilitated seeding the database with users, comments and gods.

As well as this additional backend functionality I built the 'Home', 'Searchbar' and 'ProfilePage' components.

Initially working on the Searchbar where I spent some time trying to include the ability to search both 'Gods' and 'God Types'. However, I discovered a limitation of SemanticUI's Dropdown element is that it cannot facilitate real time search updates with multiple headers. To avoid potentially confusing the user I opted to only include 'Gods' and filter 'God Types' with the buttons below the search bar.

The main reason I wanted to work on the homepage was the scrolling comments section. I wanted to explore how this could be achieved and try and style them to look like carved stone tablets.

I am very satisfied with the style here. I used it for the profile page while other team members also used the 'engraved' class to style some of their components.

With the profile page I wanted to apply a clean and elegant style, similar to the Trust Pilot profile page.



Here I used simple conditions to decide on what to display depending on the tupe of user and information available.


```js

{currentUser.isDeusUser &&

  <div className="review-content-container">

    <div className="review-number">
      {currentUser.createdGods.length}
    </div>

    <div className="review-text">
      Gods created
    </div>

  </div>

}

```


<br>
 

## Wins

While building my components I was concurrently styling them and spent great care to ensure they would be reactive to different device sizes. I am proud of how the home and profile pages look at all device sizes.

Working as a group brought invaluable insight into seeing how other people work and think. We would mostly work individually but on a group video call. I really enjoyed being able to support and problem solve my colleagues' code. I feel explaining my understanding of concepts to them further strengthened my communication skills and my own understanding of these concepts.

I am also proud of my idea of utilising the User model for both 'standard' and 'deus' users. Allowing different functionality for each and having the 'deus' user assigned by the location the location a user registers from.

```js

//models.users.js
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isDeusUser: { type: Boolean, required: true }
})

//config.secureRoute.js
export const deusRoute = async (req, res, next) => {
  try {
    if (!req.currentUser.isDeusUser) throw new Error()
    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

//config.router.js
router.route('/gods')
  .get(getAllGods)
  .post(secureRoute, deusRoute, addGod)

//client.src.Components.Authentification.StandardRegister.js
if (location === '/deus_register') {
  const settingLocation = { ...registerData, isDeusUser: true }
}

```


## Challenges

Using git as a team was a challenge. This was the first time we had utilised branches and some members were less confident with the process of merging and pushing. To combat this we looked to have the whole team present for these moments.



## Bugs

It is possible to access the 'write a comment' feature while not logged in. This should push the user to the login/register page.


## Future Improvements

I would revisit the search bar on the homepage to include the ability to search 'God Types' too by removing the 'header' and using a subheading in the actual Dropdown Item saying whether it is a 'God' or 'God Type'. Another step would be to apply a 'sticky' navbar that is always visible and add the search bar to the navbar when it is no longer visible in the main window.

With experience gained since this project I would also revisit the scrolling comments on the home page and have these reset and start scrolling again to avoid 'running out of comments'

## Key Learnings

I think trying to implement a more formal heirarchy to the group may have been useful. Ensuring the Trello board was being used to assign tasks could have avoided scope creep.

We wanted to ensure our seed files populated enough Gods to make the site appear more complete. In practice this left some Gods with very little information to display.

I think focusing on doing each part well is something I practiced well here and took forward.

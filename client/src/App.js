import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Home from './Components/Home'
import ShowAllGods from './Components/ShowAllGods'
import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import CategoriesCard from './Components/FilteredGods'
import DeusRegister from './Components/DeusRegister'
import StandardRegister from './Components/Authentification/StandardRegister'
import Login from './Components/Authentification/Login'
import GodsInfoPage from './Components/GodsInfoPage'
import ProfilePage from './Components/ProfilePage'
import About from './Components/About'
import Footer from './Components/Footer'
import Comment from './Components/Comment'
import Business from './Components/Business'
import CommentEdit from './Components/EditComment'
import EditDeleteGod from './Components/EditDeleteGod'


const App = () => {

  return (
    <BrowserRouter>
      < Navbar />
      <Switch>

        <Route path="/gods/:name/comments/:commentId">
          <CommentEdit />
        </Route>

        <Route path="/gods/:name/comments">
          <Comment />
        </Route>

        <Route path='/create-god/:name'>
          <EditDeleteGod />
        </Route>

        <Route path="/categories/:categoryName">
          <CategoriesCard />
        </Route>

        <Route path="/gods/:name">
          <GodsInfoPage />
        </Route>

        <Route path="/deus_register">
          <StandardRegister />
        </Route>

        <Route path="/register">
          <StandardRegister />
        </Route>

        <Route path="/create-god">
          <DeusRegister />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/gods">
          <ShowAllGods />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path='/business'>
          <Business />
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>

      </Switch>

      <Footer />




    </BrowserRouter>
  )

}

export default App

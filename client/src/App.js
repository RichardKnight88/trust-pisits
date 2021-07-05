import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Home from './Components/Home'
import ShowAllGods from './Components/ShowAllGods'
import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import FilteredGodsByCategory from './Components/FilteredGods'
import DeusRegister from './Components/DeusRegister'
import StandardRegister from './Components/StandardRegister'
import Login from './Components/Login'
import GodsInfoPage from './Components/GodsInfoPage'
import ProfilePage from './Components/ProfilePage'
import About from './Components/About'



const App = () => {

  return (
    <BrowserRouter>
      < Navbar />
      <Switch>

        <Route path="/categories/:category_name">
          <FilteredGodsByCategory />
        </Route>

        <Route path="/gods/:name">
          <GodsInfoPage />
        </Route>

        <Route path="/deus_register">
          <DeusRegister />
        </Route>

        <Route path="/register">
          <StandardRegister />
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

        <Route path="/">
          <LandingPage />
        </Route>

      </Switch>






    </BrowserRouter>
  )

}

export default App
import React from 'react'
import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import RestaurantOne from "./RestaurantOne"
import RestaurantTwo from "./RestaurantTwo"
import Register from "./components/Register"
import Login from "./components/Login"
import Footer from "./components/Footer"
import MainAbout from "./components/MainAbout"

const MainRouter = () => {
    return (
        <>
        <Navbar />
        {/* <Carousal /> */}
        <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/main-about" component={MainAbout} />
        <Route exact path ="/rest-1" component={RestaurantOne} />
        <Route exact path ="/rest-2" component={RestaurantTwo} />
        <Route exact path ="/login" component={Login} />
        <Route exact path ="/register" component={Register} />
        
        
        <Route exact path ="/contact" component={Contact} />
        </Switch>
        
        {/* <Footer /> */}
        
        
        </>
    )
}

export default MainRouter


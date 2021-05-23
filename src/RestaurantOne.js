import React, {useEffect} from "react";
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./RestaurantOne.css";
import Header from "./components/Header";
// import AboutMore from "./components/AboutMore";
// import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Footer from "../src/components/Footer"

function RestaurantOne() {

  // componentDidMount() {
  //   window.scrollTo(0, 0)
  // }
  useEffect(function(){
    window.scrollTo(0, 0)
  },[])

  
  return (
    <>

    <Header />
    {/* <Home /> */}
    <About />
    <Shop />
    <Menu />
    <Clients />
    <Prices />
    
    <Footer />

     {/* <Router>
    <Header />
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-more" component={AboutMore} />
      <Route exact path="/about" component={About} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/clients" component={Clients} />
      <Route exact path="/prices" component={Prices} />

    </Switch>

    </Router>  */}
    </>
  );
}

export default RestaurantOne;

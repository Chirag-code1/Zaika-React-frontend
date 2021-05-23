import React, {useEffect} from "react";
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./RestaurantOne.css";
import Header from "./rest2/components/Header";
// import AboutMore from "../rest2/components/AboutMore";
// import Home from "../rest2/components/Home";
import About from "./rest2/components/About";
import Shop from "./rest2/components/Shop";
import Menu from "./rest2/components/Menu";
import Clients from "./rest2/components/Clients";
import Prices from "./rest2/components/Prices";
import Footer from "../src/components/Footer"

function RestaurantOne() {

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

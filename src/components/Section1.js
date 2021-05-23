import React from 'react'
import {NavLink } from "react-router-dom";
import PizzaPic from "../img/pizza.jpg"

const Section1 = () => {
    var headingStyle={
        fontFamily:"Pacifico, cursive",
        color:"#AD1457"
     }
    return (
        <>
        <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25 text-center" style={{backgroundColor:"#F8BBD0"}}>
            {/* <h3>About Us</h3> */}
            <h1 class="text-center " style={headingStyle}>Tu Cheese badi hai mast mast...</h1>
            
            <h3 class="text-center" > Love things extra cheesy?</h3>
            <h5 class="text-center mt-3" >Get things exactly the way you like it!</h5>

            <NavLink class="btn text-center btn-outline-warning btn-lg btn-raised btn-block"to="/rest-1">Order Now</NavLink>
            
            
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src={PizzaPic} alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
            
        </>
    )
}

export default Section1

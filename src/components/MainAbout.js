import React from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom"
import PizzaPic from "../img/pizza.jpg"
import barbecue from "../rest2/img/barbecue2.jpg"

const About = () => {
  return (
    <>
    <Router>
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>Welcome TO Pizza Hut</h1>
            <p>
             We are an American restaurant chain and international franchise founded in 1958 in Wichita,
             Kansas by Dan and Frank Carney.
             We provides pizza and other Italian-American dishes,
             including pasta, side dishes and desserts.
            </p>
            <div className="about__btn">
            <button type="button" class="btn btn-warning btn-raised btn-lg btn-block mt-5 py-2">Explore Us, Order Now! </button>

            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src={PizzaPic} alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>




    <div >
      <div className="container">
        <div className="row">
        <div className="col-6">
            <div className="about__img">
              <img src={barbecue} alt="barbecue" />
            </div>
          </div>

          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>Welcome TO Barbeque Hut</h1>
            <p>
             We are an American restaurant chain and international franchise founded in 1958 in Wichita,
             Kansas by Dan and Frank Carney.
             We provides barbeques and other Italian-American  & Indian dishes,
             including pasta, side dishes and desserts.
            </p>
            <div className="about__btn">
            <button type="button" class="btn btn-secondary btn-raised btn-lg btn-block mt-5 py-2">Explore Us, Order Now! </button>

              {/* <NavLink to="/rest-2" className="btn btn-secondary btn-raised btn-lg btn-block mt-5 py-2" >
                READ MORE
              </NavLink> */}
            </div>
          </div>
         
        </div>
      </div>
    </div>

    </Router>

    </>
  );
};

export default About;

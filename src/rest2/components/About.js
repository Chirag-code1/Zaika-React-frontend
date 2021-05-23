import React from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom"
import barbecue from "../img/barbecue.jpg"

const About = () => {
  return (
    <>
    <Router>
    <div className="about">
      <div className="container">
        <div className="row">
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
              <NavLink to="/about-more" className="btn btn-raised btn-success" >
                READ MORE
              </NavLink>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src={barbecue} alt="barbecue" />
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

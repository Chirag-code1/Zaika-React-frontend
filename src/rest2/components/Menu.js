import React from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import barbecue from "../img/barbecue4.jpg"

const Menu = () => {
  return (
    <>
    <Router>
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src={barbecue} alt="barbecue" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Barbeque Menu</h3>
            <h1>Classic Hand Tossed</h1>
            <p>
              The Barbeque you all know and love.
            </p>
            <div className="about__btn ">
            <button type="button" class="btn btn-warning btn-raised btn-lg btn-block mt-5 py-2">Explore Us, Order Now! </button>
              {/* <NavLink  to="/about" className="btn btn-smart" >
                VIEW MORE
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

export default Menu;

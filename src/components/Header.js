import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
    <div className="banner">
      {/* <Navbar /> */}
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delivery</h3>
            <h1>Pizza Hut</h1>
            <p>
              Who's got the best pizzas?
              Oh yes its us. 
              Why order a pizza you ask?
              Because Pizza tastes better than skinny.
             </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                Order Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Header;

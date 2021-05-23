import React from "react";
// import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
    <div className="banner2">
      {/* <Navbar /> */}
      <div className="banner__content2">
        <div className="container">
          <div className="banner__text">
            <h4 style={{fontFamily:"Pacifico, cursive"}}>Persian Delight...</h4>
            <h1>Barbeque Nation</h1>
            <p>
              Who's got the best Barbeque?
              <br/>
              Oh yes its us! 
             
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

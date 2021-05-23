import React from "react";
import Pic from "../img/logo.jpg"
import {BrowserRouter as Router, NavLink} from "react-router-dom";

const Navbar = () => {

  
  return (

    
    
    <>
     <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <NavLink className="navbar-brand" to="#">Zaika</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link"to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/main-about">About</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/login">Login <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/register">Register </NavLink>
      </li>
        
     
      
    </ul>
    
  </div>
</nav>
</div>
    {/* <Router>
    
    <nav className="navbar">
      <div className="navbar__text">
       
        <ul className="navbar__ul">
          <li>
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/shop">Shop</NavLink>
          </li>
        
        </ul>
      </div>
    </nav>
</Router> */}
    </>
  );
};

export default Navbar;

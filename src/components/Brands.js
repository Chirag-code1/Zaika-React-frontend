import React from 'react'
import {Carousel} from "react-bootstrap";
import {NavLink } from "react-router-dom";
import logo1 from "../rest2/img/logo.jpg"
import logo2 from "../rest2/img/burgerking.png"
import logo3 from "../rest2/img/logo2.png"
import logo4 from "../rest2/img/logos/4.jpg"
import logo5 from "../rest2/img/logos/5.jpg"
import logo6 from "../rest2/img/logos/6.png"
import logo7 from "../rest2/img/logos/7.jpg"
import logo8 from "../rest2/img/logos/8.jpg"
import logo9 from "../rest2/img/logos/9.png"
import logo10 from "../rest2/img/logos/10.jpg"
import logo11 from "../rest2/img/logos/11.jpg"
import logo12 from "../rest2/img/logos/12.jpg"

const Brands = () => {
    return (
        <>
        <div className="jumbotron text-center ">
              
              <h1 className="mb-3 mt-1" style={{ fontFamily:"Pacifico, cursive"}}>Brands in Reach</h1>
               <p style={ {fontFamily:"Pacifico, cursive"}}>Our bond is as pure as our feast ... estd-2021</p>
 
                  <Carousel>
                  <Carousel.Item interval={2000}>
                  <div class="card-group">
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top p-3" src={logo1} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title mt-3">Pizza Hut</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-1" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top p-3" src={logo2} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">Burger King</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-2" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top " src={logo3} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">Barbeque Nation</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-1" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top p-3" src={logo4} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">Macdonald's</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-1" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                      </div>
  
    
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <div class="card-group">
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top mt-5 mb-5" src={logo9} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title mt-5 ">Creekside Grill</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-1" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top" src={logo6} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">Manohar</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-2" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top" src={logo7} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">Greek</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-1" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top mt-3 p-2" src={logo8} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title mt-4">Eat & Treat</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-2" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                      </div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div class="card-group">
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top p-2 mt-1" src={logo9} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title mt-4">Creekside Grills</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-1" className="btn btn-outline-primary mt-2">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top mt-1" src={logo10} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title mt-3">Lucy's</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-2" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top mt-2" src={logo11} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title mt-4 ">Sun & Moon</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-1" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2 mb-3">
                          <img class="card-img-top" src={logo12} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title mt-0">TacoRepublica</h5>
                            <p class="card-text">We are here to take care of your craving without compromising with the quality of your food.</p>
                            <NavLink to="/rest-2" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                      </div>
    
  </Carousel.Item>
</Carousel>
</div>
            
        </>
    )
}

export default Brands

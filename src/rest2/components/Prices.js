import React from "react";
import {Carousel} from "react-bootstrap";
import Starter1 from "../img/Starters/1.jpg"
import Starter2 from "../img/Starters/2.jpg"
import Starter3 from "../img/Starters/3.jpg"
import Starter4 from "../img/Starters/4.jpg"
import Starter5 from "../img/Starters/5.jpg"
import Starter6 from "../img/Starters/6.jpg"
import Starter7 from "../img/Starters/7.jpg"
import Starter8 from "../img/Starters/8.jpg"
import Starter9 from "../img/Starters/9.jpg"
import Starter10 from "../img/Starters/10.jpg"
import Starter12 from "../img/Starters/12.jpg"

import mainCourse1 from "../img/Main Course/1.jpg"
import mainCourse2 from "../img/Main Course/2.jpg"
import mainCourse3 from "../img/Main Course/3.jpg"
import mainCourse4 from "../img/Main Course/4.jpg"
import mainCourse5 from "../img/Main Course/5.jpg"
import mainCourse6 from "../img/Main Course/6.jpg"
import mainCourse7 from "../img/Main Course/7.jpg"
import mainCourse8 from "../img/Main Course/8.jpeg"
import mainCourse9 from "../img/Main Course/9.jpg"
import mainCourse10 from "../img/Main Course/10.jpg"

import dessert1 from "../img/Dessert/1.jpg"
import dessert2 from "../img/Dessert/d2.jpg"
import dessert3 from "../img/Dessert/9.jpg"
import dessert4 from "../img/Dessert/d4.jpg"
import dessert5 from "../img/Dessert/d5.jpg"
import dessert6 from "../img/Dessert/d6.jpg"
import dessert7 from "../img/Dessert/d7.png"
import dessert8 from "../img/Dessert/d8.jpg"
import dessert9 from "../img/Dessert/9.jpg"
import dessert10 from "../img/Dessert/10.jpg"
import dessert11 from "../img/Dessert/d11.jpg"
import dessert12 from "../img/Dessert/12.jpg"

import Pic1 from "../img/barbecue1.jpg"
import Pic2 from "../img/barbecue2.jpg" 
import Pic3 from "../img/barbecue3.jpg"
import Pic4 from "../img/barbecue4.jpg"
import Pic5 from "../img/barbecue5.jpg"
import Pic6 from "../img/barbecue6.jpg"

const Prices = () => {

  var divStyle = {
    backgroundColor:"pink",
    width:"800px",
    margin: "0 auto"
    
  }
  
  return (
    <>
    {/* <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic1} alt="pizza" />
              </div>
              <h1 className="price__heading">BBQ Burger</h1>
              <p className="price__text">
              We like our burgers piled sky-high. This vers
              ion comes with our secret sauce , sweet and sour on
              ions, emmental cheese, gherkins, frilly lettuce, and more
              </p>
              <p className="price_rs">Rs350.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic2} alt="pizza" />
              </div>
              <h1 className="price__heading">BBQ chilli chicken wings</h1>
              <p className="price__text">
              These juicy wings are spiced with paprika, cumin, cayenne pepper and fre
              oregano. Crisped up on the BBQ and served with a light yogurt sauc
              e to feed a hungry horde.
              </p>
              <p className="price_rs">Rs.300.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <div className="price__img">
                <img src={Pic3} alt="pizza" />
              </div>
              <h1 className="price__heading">Spicy BBQ Chicken kebabs</h1>
              <p className="price__text">
              Definitely a dish worth firing up the BBQ for. Comes with a side of Grilled pineapple.
              </p>
              <p className="price_rs">Rs.350.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic4} alt="pizza" />
              </div>
              <h1 className="price__heading">BBQ corn on the cob</h1>
              <p className="price__text">
              Pep-up this grilled Mexican street snack with punchy Korean gochujang sauce and serve as a zingy side dish.
 
              </p>
              <p className="price_rs">Rs.250.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic5} alt="pizza" />
              </div>
              <h1 className="price__heading">Paneer BBQ skewers with charred naans</h1>
              <p className="price__text">
              Marinade paneer then thread onto skewers and grill on the BBQ alongside naans.

              </p>
              <p className="price_rs">Rs.400.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic6} alt="pizza" />
              </div>
              <h1 className="price__heading">Paneer Souvlaki</h1>
              <p className="price__text">
              Souvlaki is a popular Greek fast food that consists of
               meat and vegetables grilled on a skewer. This is the vegetarian version.
              </p>
              <p className="price_rs">Rs.300.00</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

{/* 
    <div className="jumbotron">
    <div className="container">

    <h2 className="text-center" style={{fontFamily:" Pacifico, cursive"}}> Starters...</h2>
      <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       </div>

       <h2 className="text-center py-3" style={{fontFamily:" Pacifico, cursive"}}> Starters...</h2>
       <div className="row mb-3">
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       </div>

       <h2 className="text-center py-3" style={{fontFamily:" Pacifico, cursive"}}> Starters...</h2>
       <div className="row mb-3">
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       </div>

       <h2 className="text-center py-3" style={{fontFamily:" Pacifico, cursive"}}> Starters...</h2>
       <div className="row">
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3 mb-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
    
       </div>
       </div>
    </div>
 */}

{/* 
     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <h2 className="text-center" style={{fontFamily:" Pacifico, cursive"}}> Starters...</h2>
      <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       </div>
    </div>
    <div class="carousel-item">
    <h2 className="text-center" style={{fontFamily:" Pacifico, cursive"}}> Starters...</h2>
      <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$14</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$14</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$14</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$14</h4>   
       </div>
       </div>
    </div>
    <div class="carousel-item">
    <h2 className="text-center" style={{fontFamily:" Pacifico, cursive"}}> Starters...</h2>
      <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3" src={Pic1} alt="Card image cap" />
              <h5 class="card-title mt-2">Card title</h5>
              <h4 class="card-text mb-2">$4</h4>   
       </div>
       </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>  */}



{/* 
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="card-group">
                        <div class="card mr-2 ml-2">
                          <img class="card-img-top" src={logo1} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">Card title1</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <NavLink to="/rest-1" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2">
                          <img class="card-img-top" src={logo2} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">Card title2</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <NavLink to="/" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2">
                          <img class="card-img-top" src={logo3} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">Card title3</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <NavLink to="/rest-2" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                        <div class="card mr-2 ml-2">
                          <img class="card-img-top" src={logo4} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">Card title4</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <NavLink to="/" className="btn btn-outline-primary">EXPLORE</NavLink>
                          </div>
                        </div>
                      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Pic2} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Pic3} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}


<div className="jumbotron">

{/* ============Today's Special================= */}
<div className="jumbotron mb-5">
<div className="container mb-5">
<div class="" style={divStyle} >
<h2 className=" py-3 text-center" style={{fontFamily:" Pacifico, cursive"}}> Today's Special...</h2>
</div>

  <div className="row " style={{height: "10rem"}}>
      <div class=" card bg-info text-white col-3 text-center " >
            <img class="card-img-top p-3 mt-5" src={Pic1} alt="Card image cap" />
             
       </div>
       <div class=" card bg-secondary text-white col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3 mt-5" src={Pic2} alt="Card image cap" />
           
       </div>
       <div class="card bg-warning text-white col-3 text-center" style={{height: "18rem"}}>
            <img class=" card-img-top p-3 mt-5 " src={Pic3} alt="Card image cap" />
               
       </div>
       <div class="card bg-success text-white col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3 mt-5" src={Pic4} alt="Card image cap" />  
       </div>
       </div>
       </div>
       </div>


{/* Starters */}
  <h2 className="text-center py-3" style={{fontFamily:" Pacifico, cursive"}}> Starters...</h2>
  <Carousel>
  <Carousel.Item interval={2000}>
  <div className="row mb-3">
      <div class=" card col-3 text-center " style={{height: "18rem"}}>
            <img class="card-img-top p-3 ml-2" src={Starter1} alt="Card image cap" />
              <h5 class="card-title mt-2">Black Bean Dip</h5>
              <h4 class="card-text mb-2">Rs. 85/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={Starter2} alt="Card image cap" />
              <h5 class="card-title mt-2">Spicy Salad</h5>
              <h4 class="card-text mb-2">Rs. 110/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={Starter3} alt="Card image cap" />
              <h5 class="card-title mt-2">Lilva Kachori</h5>
              <h4 class="card-text mb-2">Rs. 99/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={Starter4} alt="Card image cap" />
              <h5 class="card-title mt-2">Gaucamble</h5>
              <h4 class="card-text mb-2">Rs. 129/-</h4>   
       </div>
       </div>
    
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3 ml-2" src={Starter5} alt="Card image cap" />
              <h5 class="card-title mt-2">Falafel</h5>
              <h4 class="card-text mb-2">Rs. 119/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={Starter6} alt="Card image cap" />
              <h5 class="card-title mt-2">Chilli Ambi</h5>
              <h4 class="card-text mb-2">Rs. 99/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={Starter7} alt="Card image cap" />
              <h5 class="card-title mt-2">Special seez</h5>
              <h4 class="card-text mb-2">Rs. 120/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={Starter8} alt="Card image cap" />
              <h5 class="card-title mt-2">Startner Nawabi</h5>
              <h4 class="card-text mb-2">Rs. 185/-</h4>   
       </div>
       </div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top ml-2 p-3" src={Starter9} alt="Card image cap" />
              <h5 class="card-title mt-2">Kothimbir Vadi</h5>
              <h4 class="card-text mb-2">Rs. 130/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={Starter10} alt="Card image cap" />
              <h5 class="card-title mt-2">Methi Muthia</h5>
              <h4 class="card-text mb-2">Rs. 110/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={Starter1} alt="Card image cap" />
              <h5 class="card-title mt-2">Black Bean Dip</h5>
              <h4 class="card-text mb-2">Rs. 85/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={Starter12} alt="Card image cap" />
              <h5 class="card-title mt-2">Dhokla</h5>
              <h4 class="card-text mb-2">Rs. 125/-</h4>   
       </div>
       </div>
    
  </Carousel.Item>
</Carousel>
  

  {/* Main Course */}

  <h2 className="text-center py-3" style={{fontFamily:" Pacifico, cursive"}}> Main Course...</h2>
  <Carousel>
  <Carousel.Item interval={2000}>
  <div className="row mb-3">
      <div class=" card col-3 text-center " style={{height: "18rem"}}>
            <img class="card-img-top p-3 ml-2" src={mainCourse1} alt="Card image cap" />
              <h5 class="card-title mt-2">Traditional Delight</h5>
              <h4 class="card-text mb-2">Rs. 125/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={mainCourse2} alt="Card image cap" />
              <h5 class="card-title mt-2">Vda Pav</h5>
              <h4 class="card-text mb-2">Rs.119/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={mainCourse3} alt="Card image cap" />
              <h5 class="card-title mt-2">Thali Special</h5>
              <h4 class="card-text mb-2">Rs.149/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-2" src={mainCourse4} alt="Card image cap" />
              <h5 class="card-title mt-1">Tandori Chicken</h5>
              <h4 class="card-text mb-2">Rs.225/-</h4>   
       </div>
       </div>
    
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top py-3 ml-2" src={mainCourse5} alt="Card image cap" />
              <h5 class="card-title mt-2">Shahi Samosa</h5>
              <h4 class="card-text mb-2">Rs.75/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={mainCourse6} alt="Card image cap" />
              <h5 class="card-title mt-2">Special Bhel</h5>
              <h4 class="card-text mb-2">Rs.129/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={mainCourse7} alt="Card image cap" />
              <h5 class="card-title mt-2">Malai Kofta</h5>
              <h4 class="card-text mb-2">Rs.125/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={mainCourse8} alt="Card image cap" />
              <h5 class="card-title mt-2">Tandoori Pizza</h5>
              <h4 class="card-text mb-2">Rs.149/-</h4>   
       </div>
       </div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top ml-2 p-3" src={mainCourse9} alt="Card image cap" />
              <h5 class="card-title mt-2">Indian Pizza</h5>
              <h4 class="card-text mb-2">Rs.245/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-2" src={mainCourse10} alt="Card image cap" />
              <h5 class="card-title mt-1">Chhole Bhature</h5>
              <h4 class="card-text mb-2">Rs.120/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top  py-3" src={mainCourse5} alt="Card image cap" />
              <h5 class="card-title  mt-4">Shahi Samosa</h5>
              <h4 class="card-text mb-2">Rs.75/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={mainCourse7} alt="Card image cap" />
              <h5 class="card-title mt-2">Malai Kofta</h5>
              <h4 class="card-text mb-2">Rs.125/-</h4>   
       </div>
       </div>
    
  </Carousel.Item>
</Carousel>

{/* ===========================dessert================= */}
<h2 className="text-center py-3" style={{fontFamily:" Pacifico, cursive"}}> Dessert...</h2>
  <Carousel>
  <Carousel.Item interval={2000}>
  <div className="row mb-3">
      <div class=" card col-3 text-center " style={{height: "18rem"}}>
            <img class="card-img-top p-3 ml-2" src={dessert5} alt="Card image cap" />
              <h5 class="card-title mt-2">Kinder Cookies</h5>
              <h4 class="card-text mb-2">Rs.145/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={dessert6} alt="Card image cap" />
              <h5 class="card-title ">Fruit Cake</h5>
              <h4 class="card-text mb-2">Rs.185/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top mt-3 py-3" src={dessert7} alt="Card image cap" />
              <h5 class="card-title mt-2">Sweet Brust Balls</h5>
              <h4 class="card-text mb-2">Rs.119/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={dessert8} alt="Card image cap" />
              <h5 class="card-title mt-2">Smoothie dip</h5>
              <h4 class="card-text mb-2">Rs.144/-</h4>   
       </div>
       </div>
    
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3 ml-2" src={dessert1} alt="Card image cap" />
              <h5 class="card-title mt-2">Donalds</h5>
              <h4 class="card-text mb-2">Rs.110/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={dessert2} alt="Card image cap" />
              <h5 class="card-title mt-2">Brownie</h5>
              <h4 class="card-text mb-2">Rs.185/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={dessert5} alt="Card image cap" />
              <h5 class="card-title mt-2">Kinder Sweet</h5>
              <h4 class="card-text mb-2">Rs.125/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={dessert4} alt="Card image cap" />
              <h5 class="card-title mt-2">Cake cookie</h5>
              <h4 class="card-text mb-2">Rs.149/-</h4>   
       </div>
       </div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div className="row mb-3">
      <div class=" card col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top ml-2 p-3" src={dessert9} alt="Card image cap" />
              <h5 class="card-title mt-2">Smoothie Roll</h5>
              <h4 class="card-text mb-2">Rs.124/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={dessert6} alt="Card image cap" />
              <h5 class="card-title mt-2">Fruit Cake</h5>
              <h4 class="card-text mb-2">Rs.185/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={dessert11} alt="Card image cap" />
              <h5 class="card-title ">Pastery</h5>
              <h4 class="card-text mb-2">Rs.125/-</h4>   
       </div>
       <div class=" card col-3  text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3" src={dessert12} alt="Card image cap" />
              <h5 class="card-title mt-1">Gajar paak</h5>
              <h4 class="card-text mb-2">Rs.149/-</h4>   
       </div>
       </div>
    
  </Carousel.Item>
</Carousel>









</div>


    </>
  );
};

export default Prices;

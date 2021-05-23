import React from 'react'
import {Carousel} from "react-bootstrap";
// import food from "../images/food.jpg";
import Food1 from "../images/food111.jpg"
import Food2 from "../rest2/img/bg2.jpg"
import Food3 from "../images/Noodle.jpg"

const Carousal = () => {
    return (
        <>
            

            <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className=" main d-block w-100"
      src={Food1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Delecia</h3>
      <p>Best South Indian food in your reach.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 main"
      src={Food2}
      
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Barbecue</h3>
      <p>Chicken on seekh is no less than a feast.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" main d-block w-100"
      src={Food3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Best Chinese at Best Deals</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Carousal

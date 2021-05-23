import React from "react";
import Pic1 from "../img/pizza1.png"
import Pic2 from "../img/pizza2.png"
import Pic3 from "../img/pizza3.png"
import Pic4 from "../img/pizza4.png"
import Pic5 from "../img/pizza5.png"
import Pic6 from "../img/pizza6.png"

const Prices = () => {
  return (
    <>
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic1} alt="pizza" />
              </div>
              <h1 className="price__heading">CTM Pizza</h1>
              <p className="price__text">
                Tomato and Mushroom on top of loads of cheese.
              </p>
              <p className="price_rs">Rs350.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic2} alt="pizza" />
              </div>
              <h1 className="price__heading">TC Pizza</h1>
              <p className="price__text">
               For those allergic to mushrooms (who even hates mushrooms? ah the allergics i guess)
              </p>
              <p className="price_rs">Rs.300.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic3} alt="pizza" />
              </div>
              <h1 className="price__heading">COT Pizza</h1>
              <p className="price__text">
                Olives and Tomato on the top of loads of cheese. 
              </p>
              <p className="price_rs">Rs.350.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic4} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Just Cheese. 
              </p>
              <p className="price_rs">Rs.250.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic5} alt="pizza" />
              </div>
              <h1 className="price__heading">Pepperoni Pizza</h1>
              <p className="price__text">
                The classic Italian/American Choice, Salami on top of a cheesy delight.
              </p>
              <p className="price_rs">Rs.400.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pic6} alt="pizza" />
              </div>
              <h1 className="price__heading">Spicy Delight</h1>
              <p className="price__text">
                This is often a hothead's choice.
              </p>
              <p className="price_rs">Rs.300.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Prices;

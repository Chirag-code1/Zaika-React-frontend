import React from 'react'
import macdiMeal from "../rest2/img/macdiMeal.jpg"

const Section3 = () => {
    var headingStyle4={
        fontFamily:"Quicksand, sans-serif",
        color:"#FFE77A"
      }
      
    return (
        <>
         <div className="about">
      <div className="container">
        <div className="row">

        <div className="col-6">
            <div className="about__img">
              <img src={macdiMeal} alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25 text-center" style={{backgroundColor:"#2C5F2DFF"}}>
            {/* <h3>About Us</h3> */}
            <h1 class="text-center " style={headingStyle4}>Tera dhyaan kidhar hain,</h1>
            <h1 class="text-center " style={headingStyle4}>Macdonald's meal idhar hain !</h1>
            
            <div>
            <h3 class="text-center text-white py-3" > Starting at 199/-</h3>
            <h5 class="text-center mt-3 text-white" >I'm loving it!</h5>
            </div>
          </div>
          
        </div>
      </div>
    </div>


            
        </>
    )
}

export default Section3

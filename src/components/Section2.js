import React from 'react'
import Pic1 from "../rest2/img/barbecue1.jpg"
import PizzaPic from "../img/pizza.jpg"
import Pic3 from "../rest2/img/barbecue2.jpg"


const Section2 = () => {

    var headingStyle2={
        // fontFamily:"Pacifico, cursive", 
        fontFamily: 'Newsreader, serif',
        color:"red",  
     }

     var headingStyle3={
        fontFamily:"Pacifico, cursive",
        textAlign:"center",
        color:"black"
      }
    return (
        <>
        
<div className="p-5 " style={{backgroundColor:"#E91E63"}} >
<h1 style={headingStyle3}>Tareef Karun Kya uski jisne tumhe bulaya...</h1>

      <div className="container " style={{backgroundColor:"#E6EE9C"}}>
        <div className="row mb-2">
        <div className="col-4 p-3" >
            <div className="about__img">
              <img src={Pic1} alt="Pizza" />
            </div>
          </div>
          <div className="col-4 mt-3 mb-3 text-center " style={{backgroundColor:"#FF8A65"}}>
           
            <h1 class="text-center mt-3 mb-1 text-white" style={headingStyle2}>ZAIKA tum Khushiyo ka Khazana<br/>Dhik-tana Dhitk-tana Dhik-tana!</h1>
          
          </div>
          <div className="col-4 p-3 " >
            <div className="about__img">
              <img src={PizzaPic} alt="Pizza" />
            </div>
          </div>
          </div>

          <div className="row ml-1">
          <div className="col-4 mt-3 p-5 mb-3 text-center " style={{backgroundColor:"#FF8A65"}}>
            
            <h1 class="text-center mt-3 mb-2 text-white" style={headingStyle2}>Mere Karan Arjun<br/>Khaaenge!</h1>
          
          </div>

          <div className="col-4 p-3" >
            <div className="about__img">
              <img src={Pic3} alt="Pizza" />
            </div>
          </div>
          <div className="col-4 mt-3 p-5 mb-3 text-center " style={{backgroundColor:"#FF8A65"}}>
            
            <h1 class="text-center mt-3 mb-2 text-white" style={headingStyle2}>DDLJ<br />Dilwale Delivery Le Jaenge!</h1>
           
             
          </div>
          </div>
          
          
        </div>
      </div>
      
            
        </>
    )
}

export default Section2

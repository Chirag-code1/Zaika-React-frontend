import React from 'react'
import logo1 from "../rest2/img/logo.jpg"
import Pic1 from "../rest2/img/4 for the landing page/Burger.jpg"
import Pic2 from "../rest2/img/4 for the landing page/OreoShake.jpg"
import Pic3 from "../rest2/img/4 for the landing page/Cake.jpg"
import Pic4 from "../rest2/img/4 for the landing page/icecream.jpg"

const InspirationFood = () => {
    return (
        <>
            <div className="jumbotron mb-5">
<div className="container mb-5">
<h2 className=" py-3" style={{fontFamily:" Pacifico, cursive"}}> Inspiration to Place your first Order...</h2>

  <div className="row " style={{height: "10rem"}}>
      <div class=" card bg-info text-white col-3 text-center " >
            <img class="card-img-top p-3 mt-2" src={Pic1} alt="Card image cap" />
             
       </div>
       <div class=" card bg-secondary text-white col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3 mt-2" src={Pic2} alt="Card image cap" />
           
       </div>
       <div class="card bg-warning text-white col-3 text-center" style={{height: "18rem"}}>
            <img class=" card-img-top p-3 mt-2 " src={Pic3} alt="Card image cap" />
               
       </div>
       <div class="card bg-success text-white col-3 text-center" style={{height: "18rem"}}>
            <img class="card-img-top p-3 mt-2" src={Pic4} alt="Card image cap" />  
       </div>
       </div>
       </div>
       </div>
   
        </>
    )
}

export default InspirationFood

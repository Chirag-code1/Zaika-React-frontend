import React from 'react'

const Footer = () => {
    return (
        <>
             <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >
   
    
    <section class="">
      <div class="container text-center text-md-start py-5 mt-5">
        
        <div class="row mt-3">
         
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 class="text-uppercase fw-bold">Company name</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px"},{ backgroundColor: "#7c4dff"},{ height: "2px"}}
                />
            <p>
              Hungry? We have a surprise for you.
            </p>
          </div>
         
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
            <h6 class="text-uppercase fw-bold">Services</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px"},{ backgroundColor: "#7c4dff"},{ height: "2px"}}
                />
            <p>
              <a href="#!" class="text-white"></a>
            </p>
            <p>
              <a href="#!" class="text-white">Late night delivery</a>
            </p>
            <p>
              <a href="#!" class="text-white">Fast Delivery</a>
            </p>
            <p>
              <a href="#!" class="text-white">Discount Coupons</a>
            </p>
          </div>
          
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px"},{ backgroundColor: "#7c4dff"},{ height: "2px"}}
                />
            <p>
              <a href="#!" class="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" class="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-white">Help</a>
            </p>
          </div>
          
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px"},{ backgroundColor: "#7c4dff"},{ height: "2px"}}
                />
            <p> Chandigarh, INDIA</p>
            <p> contactUs@service.com</p>
            <p> + 01 234 567 88</p>
            <p> + 01 234 567 89</p>
          </div>
         
        </div>
        
      </div>
    </section>
    
    <div
         class="text-center p-3"
         style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}
         >
      © 2021 Copyright:
      <a class="text-white" href="https://chitkara.edu.in/"
         >Chitkara Corporations</a>
    </div>
  
  </footer>

        </>
    )
}

export default Footer

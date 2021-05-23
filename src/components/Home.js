import React from 'react'
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import WeDeliver from "./WeDeliver"
import InspirationFood from "./InspirationFood"
import Footer from "./Footer"
import Brands from "./Brands"
import Carousal from "./Carousal"


const Home = () => {
 
    return (
        <>
        <Carousal />
        <InspirationFood />
        <Section1 />
        <Brands />
        <Section2 />
        <Section3 />
        <WeDeliver />
        <Footer />


        </>
    )
}

export default Home

import React from "react";
import Carousel from "./carousels";

import Navbar from "./navbar";


const Headers=()=>{
    return(
        <>
        <Navbar/>
        <Carousel/>
        <span className="text-center">
        <h4>SAY HELLO TO QUIRKY GIFTS</h4>
        <p>With beautiful handpicked gifts to expert curations, we are here to provide you a memorable and seamless gifting experience.</p>
        <h4>CURATED GIFT BOXES</h4>
        </span>
        
        </>
    );
}
export default Headers;
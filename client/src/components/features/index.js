import React from "react";
import Carousel from "./Carousel";
import { scroller } from "react-scroll";
import {Link} from "react-router-dom"

const Featured = () => {
  const scrollToElement = (ele)=>{
    scroller.scrollTo(ele,{
      duration:1500,
      delay:100,
      smooth: true
    })
  }
  return (
    <div  style={{ position: "relative" }}>
      <Carousel />
      <div className="hero-word col-10 mx-auto col-md-6 col-lg-4 text-center ">
        <h2 className=" ft text-light text-capitalize">Your one stop web Platfrom for short let apartments.</h2>
        {/* <p className=" text-light">Rent  Short  Let  Apartments  with  Ease....</p> */}
        <div className="reg">
          
            <Link to="/rooms" className= "text-uppercase btn btn-primary2  mt-3" >Apartments</Link>
        
          </div>
         <div className="login ml-3">
         
         <a className="text-uppercase  text-light btn btn-primary3 ft2 mt-3" button onClick={() =>scrollToElement('topPicks')}>
          top picks
        </a>
            
         </div> 
        
      </div>
      
    </div>
  );
};

export default Featured;

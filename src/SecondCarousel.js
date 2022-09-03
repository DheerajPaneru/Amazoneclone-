import Slider from "react-slick";
import React, { Component } from "react";
import Applewatch from "./Applewatch.jpg"
import ladki from "./ladki.jpg"
import ladkii from "./ladkii.jpg"
import ladkiii from "./ladkiii.jpg"
import ladkiiii from "./ladkiiii.jpg"
import vasiline from "./vasiline.jpg"
import "./Navbar.css"
const SecondCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <>
     <div className="secondwalecar12">
        <Slider {...settings} className="sdfgyu">
          <div className="dibbahai">
            <img src={Applewatch} alt=""/>
          </div>
          <div className="dibbahai">
          <img src={ladki} alt=""/>
          </div>
          <div className="dibbahai">
          <img src={ladkiii} alt=""/>
          </div>
          <div className="dibbahai">
          <img src={ladkii} alt=""/>
          </div>
          <div className="dibbahai">
          <img src={ladkiiii} alt=""/>
          </div>
          <div className="dibbahai">
          <img src={vasiline} alt=""/>
          </div>
          </Slider>
      </div>
    </>
  )
}

export default SecondCarousel
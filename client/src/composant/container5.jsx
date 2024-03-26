import Slider from 'react-slick';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from "react";
export default function Container5() {

    return (
        <div className="container5" >
          <Carousel >
            <div>slider1</div>
            <div>slider2</div>
            <div>slider3</div>
            
            </Carousel> 
            
        </div>
    )
}
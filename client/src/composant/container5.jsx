import Slider from 'react-slick';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";

export default function Container5() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
    return (
        <>
        <h3 className='carousel-title'>Regardez nos propositions <br></br>pour plus de choix</h3>
            <Carousel {...settings} className='container5'>
               
                <div >
                    <img src="/images/floral.jpg" />
                    <p className="text">contactez les meilleur décorateur , <br></br>pour vos évenement</p>
                </div>
                <div>
                    <img src="/images/man.jpg" />
                    <p className="text">contactez les meilleur service traiteur , <br></br>pour vos évenemen</p>
                </div>
                <div>
                    <img src="/images/buffet2.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/buffet2.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/buffet2.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
        

        
    )
 }
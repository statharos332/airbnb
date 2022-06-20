import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imageOne from './images/panel.jpeg';
import imageTwo from './images/Ranch.jpeg';
import imageThree from './images/Villa_Vau.jpeg';
import imagefour from './images/Villa-Tun.jpeg';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="main-slider">
        <h2> New Collection</h2>
        <Slider {...settings}>
          <div>
          <img className="slider-img" src={imageOne} />
            <div>
          <span className="slider-span">Hot Villas</span>
            </div>
          </div>
          <div>
          <div>
          <img className="slider-img" src={imageTwo} />
            <div>
          <span className="slider-span">Hot Villas</span>
            </div>
          </div>
          </div>
          <div>
          <div>
          <img className="slider-img" src={imageThree} />
            <div>
          <span className="slider-span">Hot Villas</span>
            </div>
          </div>
          </div>
          <div>
          <div>
          <img className="slider-img" src={imagefour} />
            <div>
          <span className="slider-span">Hot Villas</span>
            </div>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}
import React from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss"



function Slik () {

    let options = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1
      };

    return (
        <Slider {...options}>
            
        </Slider>       
    );
}

export default Slik;
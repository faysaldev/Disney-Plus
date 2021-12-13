import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function Sliders() {

    
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
};


    return (
        <Slider className="carousal" {...settings}>
        <div className="signleimg__wrap">
            <a href="#">
                <img src="/images/slider-badging.jpg" />
            </a>
        </div>

        <div className="signleimg__wrap">
            <a href="#">
                <img src="/images/slider-badag.jpg" />
            </a>
        </div>

        <div className="signleimg__wrap">
            <a href="#">
                <img src="/images/slider-scale.jpg" />
            </a>
        </div>

        <div className="signleimg__wrap">
            <a href="#">
                <img src="/images/slider-scales.jpg" />
            </a>
        </div>
        </Slider>
    )
}

export default Sliders;

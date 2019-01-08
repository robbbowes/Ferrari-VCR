import React from 'react';
import Slider from "react-slick";

import slide_one_synth from '../../resources/images/ciaran-o-brien-769402-unsplash.jpg';
// Photo by Ciaran O'Brien on Unsplash
import slide_two_synth from '../../resources/images/viktor-juric-1044666-unsplash.jpg';
// Photo by Viktor Juric on Unsplash
import slide_three_synth from '../../resources/images/ryan-tang-273380-unsplash.jpg';
// Photo by Ryan Tang on Unsplash


const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div
            className="carousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${slide_one_synth})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>

                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${slide_two_synth})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>

                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${slide_three_synth})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default Carousel;
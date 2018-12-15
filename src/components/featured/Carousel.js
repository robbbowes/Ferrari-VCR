import React from 'react';
import Slider from "react-slick";

import slide_one_synth from '../../resources/images/slide_one_synth.png';
import slide_two_synth from '../../resources/images/slide_two_synth.jpg';
import slide_three_synth from '../../resources/images/slide_three_synth.jpg';
import slide_four_synth from '../../resources/images/slide_four_synth.jpg';
import slide_five_synth from '../../resources/images/slide_five_synth.jpg';

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

                {/* <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${slide_three_synth})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div> */}

                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${slide_four_synth})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${slide_five_synth})`,
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
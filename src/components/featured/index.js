import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carousel/>
            
            <div className="artist_name font_righteous">
                <div className="wrapper">
                    Back To 1984
                </div>

            </div>

            <Countdown/>

        </div>
    );
};

export default Featured;
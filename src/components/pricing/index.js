import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [100, 250, 150],
        positions: ['Behind Driver', 'Shotgun', 'Back Seat'],
        desc: ['You get to travel back to the 80s in style, but have no say on what goes on the tapedeck.',
            'Riding in style.  Full access to top quality VHS tapes and the chance to offer suggestions on what to play on the ride',
            'Travel to the 80s in style, more leg room than behind the driver - I have long legs.'
        ],
        linkto: ['#', '#', '#'],
        delay: [500, 0, 500],
        
    }

    showBoxes = () => (
        this.state.prices.map((price, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck='#ffa800'
                                color='#ffffff'
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
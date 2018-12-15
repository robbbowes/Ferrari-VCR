import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {

    state = {

    }

    render() {
        return (
            <Slide left delay={1500}>
                <div>
                    <div className="countdown_wrapper">
                        <div className="countdown_top">
                            Next event
                        </div>
                        <div className="countdown_bottom">
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    23
                                </div>
                                <div className="countdown_tag">
                                    Days
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    2
                                </div>
                                <div className="countdown_tag">
                                    Hours
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    37
                                </div>
                                <div className="countdown_tag">
                                    Mins
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    57
                                </div>
                                <div className="countdown_tag">
                                    Secs
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide >
        );
    }
}

export default Countdown;
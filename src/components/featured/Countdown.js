import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {

    state = {
        nextGig: 'Dec 31 1983 23:59:59 GMT',
        years: '0',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(nextGig) {
        const time = Date.parse(new Date()) - Date.parse(nextGig)
        console.log(time)
        if (time > 0) {
            const seconds = Math.floor((time/1000)%60)
            const minutes = Math.floor((time/1000/60)%60)
            const hours = Math.floor((time/(1000*60*60))%24)
            const days = Math.floor(time/(1000*60*60*24)%365.25)
            const years = Math.floor(time/(1000*60*60*24*365.25))

            this.setState({
                years,
                days,
                hours,
                minutes,
                seconds
            })
        }
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.nextGig), 1000)
    }

    render() {
        return (
            <Slide left delay={1500}>
                <div>
                    <div className="countdown_wrapper">
                        <div className="countdown_top">
                            We're going back...
                        </div>
                        <div className="countdown_bottom">
                        <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.years}
                                </div>
                                <div className="countdown_tag">
                                    Years
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.days}
                                </div>
                                <div className="countdown_tag">
                                    Days
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.hours}
                                </div>
                                <div className="countdown_tag">
                                    Hours
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.minutes}
                                </div>
                                <div className="countdown_tag">
                                    Mins
                                </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.seconds}
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
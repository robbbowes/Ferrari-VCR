import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114937.54832551457!2d-80.21018187792836!3d25.81022472032375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami+Beach%2C+FL%2C+USA!5e0!3m2!1sen!2sfr!4v1544971750707" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            >
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
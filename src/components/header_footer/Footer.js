import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue magenta_cyan">Ferrari VCR</div>
                <div className="footer_copyright">
                    Ferrari VCR 2018. All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
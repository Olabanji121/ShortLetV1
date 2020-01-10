import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <footer className="back_orange">
            <Fade delay={800}>
                <div className="font_righteous footrt_logo_venue">
                    ShortLetNG
                    <h6 className="text-small"> support@shortletng.com</h6>
                    <h6 className="text-small">+2348065174229</h6>
                </div>
                <div className="footer_copyright pt-5">
                    
                    ASODEV 2019.All rights reserved.
                </div>
            </Fade>
        </footer>
    )
}

export default Footer

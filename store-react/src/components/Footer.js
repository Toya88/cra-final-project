import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <>
        <div className="footer">

            <div className="sscontainer" id="sslinks">
              <Link to =""> <img className="ss-butns" src="/media/instagram.png" alt='instagram icon' /></Link>
                <Link to =""><img className="ss-butns" src="/media/twitter.png" alt='twitter icon' /></Link>
                <Link to =""><img className="ss-butns" src="/media/youtube.png" alt='youtube icon' /></Link>
            </div>
        </div>
        </>
    )
};

export default Footer;
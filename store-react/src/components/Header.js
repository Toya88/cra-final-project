import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        
        <div  className="header">
            <div className="image">
                <img className="logo" src="/media/logo.png" alt="logo  W shapped waffle" />
            </div>
            
            <div className="title">
                <h1>Waffles Creations</h1>
            </div>
            
            <div className="top-nav">
                <ul>
                    <li><Link to ="/store">Store</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/commissions">Commissions</Link></li>
                    {/* <li><Link to ="/">Reviews</Link></li>  */}
                    <li><Link to ="/checkout">Checkout</Link></li>
                </ul>
            </div>
        </div>
        
    )
};

export default Header;
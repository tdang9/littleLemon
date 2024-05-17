import React from 'react';
import logo from '../llemonlogo.png';

function Header() {
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
        </header>
    );
}

export default Header;


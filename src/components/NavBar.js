// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../llemonlogo.png';

const Nav=() => (
    <nav>
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/bookings">Bookings</Link></li>
        </ul>
    </nav>
);

export default Nav;

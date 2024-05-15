import React from "react";
import logo from './llemonlogo.png';
import './App.css'

export default function Nav() {
    return (
        <nav>
            <div className="nav-content">
                <img src={logo} alt="Little Lemon Logo" className="logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    )
}
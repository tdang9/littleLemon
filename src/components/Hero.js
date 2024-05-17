import React from 'react';
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <section className="hero">
            <h1>Welcome to Little Lemon</h1>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern flare.</p>
            <Link to="/bookings">
                <button>Book a table</button>
            </Link>
        </section>
    );
}

export default Hero;

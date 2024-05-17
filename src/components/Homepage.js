import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import '../App.css';

function Homepage() {
    return (
        <div>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </div>
    );
}

export default Homepage;

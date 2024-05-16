// src/pages/HomePage.js
import React from 'react';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';

const HomePage=() => (
    <div>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
    </div>
);

export default HomePage;

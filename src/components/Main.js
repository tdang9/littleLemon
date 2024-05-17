import React, { useState, useReducer } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Footer from './Footer';

function Main() {
    const initializeTimes=() => {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    };

    const updateTimes=(state, selectedDate) => {
        return initializeTimes();
    };

    const [availableTimes, dispatch]=useReducer(updateTimes, null, initializeTimes);

    return (
        <main>
            <Hero />
            <Specials />
            <Footer />
        </main>
    );
}

export default Main;

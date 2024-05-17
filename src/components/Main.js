import React, { useState } from 'react';
import BookingPage from '../components/BookingPage';

const Main=() => {
    // State variables for booking information
    const [availableTimes, setAvailableTimes]=useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]);

    return (
        <div>
            {/* Other components and content can go here */}
            <BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </div>
    );
};

export default Main;

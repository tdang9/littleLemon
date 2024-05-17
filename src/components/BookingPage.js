import React from 'react';
import BookingForm from '../components/BookingForm'; // Assuming you have a BookingForm component

const BookingPage=({ availableTimes, setAvailableTimes }) => {
    return (
        <div>
            <h1>Book a Table</h1>
            <p>Reserve your table at Little Lemon today!</p>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </div>
    );
};

export default BookingPage;

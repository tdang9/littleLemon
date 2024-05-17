import React from 'react';
import BookingForm from './BookingForm'; // Import BookingForm component

function BookingPage({ availableTimes, dispatch }) {
    return (
        <div>
            <h2>Book a Table</h2>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default BookingPage;

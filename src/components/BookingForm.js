import React, { useState } from 'react';

const BookingForm=({ availableTimes, setAvailableTimes }) => {
    // State variables to store form data
    const [date, setDate]=useState('');
    const [time, setTime]=useState('17:00'); // Default time
    const [numberOfGuests, setNumberOfGuests]=useState(1); // Default number of guests
    const [occasion, setOccasion]=useState('Birthday'); // Default occasion

    // Function to handle form submission
    const handleSubmit=(event) => {
        event.preventDefault();
        // Add logic here to handle form submission (e.g., send data to server)
        // After submission, update availableTimes state accordingly
        const updatedAvailableTimes=availableTimes.filter((availableTime) => availableTime!==time);
        setAvailableTimes(updatedAvailableTimes);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes?.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your Reservation" />
        </form>
    );
};

export default BookingForm;

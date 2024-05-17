import React, { useState } from 'react';

function BookingForm() {
    const [formData, setFormData]=useState({
        date: '',
        time: '', // Default time
        guests: '2', // Default number of guests
        occasion: '' // Default occasion
    });

    // State variable for available times
    const [availableTimes, setAvailableTimes]=useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);

    const handleChange=(e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
                <option value="">Select a time</option>
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" max="10" required />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;

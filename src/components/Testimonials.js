// src/components/CustomersSay.js
import React from 'react';

const testimonialsData=[
    { id: 1, name: 'John Doe', rating: 5, review: 'Amazing food!', image: 'john.jpg' },
    { id: 2, name: 'Jane Smith', rating: 4, review: 'Great service!', image: 'jane.jpg' },
];

const CustomersSay=() => (
    <section className="customers-say">
        <h2>What Our Customers Say</h2>
        <ul>
            {testimonialsData.map(testimonial => (
                <li key={testimonial.id}>
                    <img src={testimonial.image} alt={testimonial.name} />
                    <p>{testimonial.name}</p>
                    <p>{'★'.repeat(testimonial.rating)}</p>
                    <p>{testimonial.review}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default CustomersSay;
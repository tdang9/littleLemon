// src/components/Specials.js
import React from 'react';

const specialsData=[
    { id: 1, name: 'Special Dish 1', description: 'Delicious and tasty', price: '$12.99' },
    { id: 2, name: 'Special Dish 2', description: 'Mouth-watering', price: '$14.99' },
];

const Specials=() => (
    <section className="specials">
        <h2>Today's Specials</h2>
        <ul>
            {specialsData.map(special => (
                <li key={special.id}>
                    <h3>{special.name}</h3>
                    <p>{special.description}</p>
                    <p>{special.price}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default Specials;

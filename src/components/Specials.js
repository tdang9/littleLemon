import React from 'react';
import './Specials.css'; // Import your CSS file

const specialsData=[
    {
        id: 1,
        img: 'https://images.pexels.com/photos/724664/pexels-photo-724664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Greek Salad',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
        price: '$12.99'
    },
    { id: 2, img: 'https://example.com/special2.jpg', name: 'Special Dish 2', description: 'Mouth-watering', price: '$14.99' },
    { id: 3, img: 'https://example.com/special3.jpg', name: 'Special Dish 3', description: 'Scrumptious', price: '$12.99' },
];

const Specials=() => (
    <section className="specials">
        <h1>Today's Specials</h1>
        <ul className="specials-list"> {/* Apply a class to the ul container */}
            {specialsData.map(special => (
                <li key={special.id} className="special-item"> {/* Apply a class to each list item */}
                    <div className="image-container"> {/* Apply a class to the image container */}
                        <img src={special.img} alt={special.name} /> {/* Keep the img tag as it is */}
                    </div>
                    <div className="item-details"> {/* Create a div for item details */}
                        <div className="item-info"> {/* Create a div for name and price */}
                            <h2>{special.name}</h2>
                            <h3 className="item-price">{special.price}</h3> {/* Move the price here */}
                        </div>
                        <p>{special.description}</p>
                        <button>Order a Delivery</button>
                    </div>
                </li>
            ))}
        </ul>
    </section>
);

export default Specials;

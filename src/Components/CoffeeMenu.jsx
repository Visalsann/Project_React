import React, { useState } from 'react';
import './CoffeeMenu.css'; // We'll create this CSS file next

const CoffeeMenu = () => {
  const [activeCard, setActiveCard] = useState(null);

  const coffeeItems = [
    { id: 1, name: "Hot Coffee", description: "Classic hot brewed coffee", price: "$4" },
    { id: 2, name: "Cafe Au Lait", description: "Equal parts coffee and steamed milk", price: "$5" },
    { id: 3, name: "Coffee Art Inspiration", description: "Latte with beautiful art design", price: "$7" }
  ];

  return (
    <div className="coffee-menu-container">
      <h2>Our Coffee Selection</h2>
      <div className="coffee-items">
        {coffeeItems.map((item) => (
          <div 
            key={item.id}
            className="coffee-item"
            onMouseEnter={() => setActiveCard(item.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="item-name">{item.name}</div>
            {activeCard === item.id && (
              <div className="hover-card">
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="price">{item.price}</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMenu;
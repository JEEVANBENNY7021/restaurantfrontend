import React, { useState } from 'react';
import './MenuList.css'; 
import juicehome from "../assets/juicehome.png";
import juicehome2 from "../assets/juicehome2.png"

const Listing = ({ items = [] }) => { 
    const [category, setCategory] = useState('FOOD');

    // Handle category button click
    const handleCategoryChange = (category) => {
        setCategory(category); 
    };

    const filteredItems = items.filter((item) => item.menu === category);

    return (
        <div>
            <img
                style={{
                    width: "200px", 
                    marginTop: "-200px", 
                    marginLeft: "120px", 
                    position: "absolute", 
                    left: "0", 
                    zIndex: 10, 
                    maxWidth: "100%",
                }}
                src={juicehome}
                alt="Juice Home"
            />

            <div className="menu-list-container">

                <h2 className="menu-list-title"> MENU ITEMS</h2>

                {/* Category selection buttons */}
                <div className="category-buttons">
                    <button
                        className={`category-btn ${category === 'FOOD' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('FOOD')}
                    >
                        FOOD
                    </button>
                    <button
                        className={`category-btn ${category === 'DRINKS' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('DRINKS')}
                    >
                        DRINKS
                    </button>
                    <button
                        className={`category-btn ${category === 'BRUNCH' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('BRUNCH')}
                    >
                        BRUNCH
                    </button>
                </div>

                {/* Display filtered menu items */}
                <ul className="menu-list">

                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <li className="menu-item" key={item._id}>
                                <div className="menu-item-details">
                                    <h3 className="menu-item-name">
                                        {item.name} - <span className="menu-item-price">${item.price.toFixed(2)}</span>
                                    </h3>
                                    <p className="menu-item-description">{item.description}</p>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className="no-items-message">No menu items available. Add some!</p>
                    )}
                </ul>

            </div>
            <img
                style={{
                    width: "200px",
                    marginTop: "-30px",
                    position: "absolute",
                    right: "20px", 
                    top: "150px", 
                    zIndex: 10, 
                    maxWidth: "100%",
                }}
                src={juicehome2}
                alt="Juice Home"
            />

        </div>
    );
};

export default Listing;

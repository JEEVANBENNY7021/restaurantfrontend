import React, { useState, useEffect } from 'react';
import './MenuList.css'; 
import { serverUrl } from "../services/serverUrl"
const MenuList = ({ items, fetchMenuItems, setSelectedItem }) => {
    const [deleting, setDeleting] = useState({}); 
    const [category, setCategory] = useState('FOOD'); 

    // Handle category button click
    const handleCategoryChange = (category) => {
        setCategory(category); 
    };

    // Filter menu items based on selected category
    const filteredItems = items.filter((item) => item.menu === category);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this item?')) {
            return; // Exit if the user cancels
        }

        setDeleting((prevState) => ({ ...prevState, [id]: true }));
        try {
            const response = await fetch(`${serverUrl}/api/menu/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete the item');
            }

            fetchMenuItems();
        } catch (error) {
            console.error('Delete error:', error);
            alert('Failed to delete the item. Please try again.');
        } finally {
            setDeleting((prevState) => ({ ...prevState, [id]: false }));
        }
    };

    const handleUpdate = (item) => {
        setSelectedItem(item); 
    };

    return (
        <div className="menu-list-container">
            <h2 className="menu-list-title">MENU ITEMS</h2>

            {/* Category selection buttons */}
            <div style={{ marginLeft: "170px", marginRight: "170px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} className="category-buttons">

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
           {/* Render menu items */}
<ul className="menu-list">
    {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
            <li className="menu-item" key={item._id}>
                <div className="menu-item-details">
                    <h3 className="menu-item-name">
                        {item.name} -{" "}
                        <span className="menu-item-price">${item.price.toFixed(2)}</span>
                    </h3>
                    <p className="menu-item-description">
                        {item.description.length > 50
                            ? `${item.description.substring(0, 50)}...`
                            : item.description}
                    </p>
                    <div className="menu-item-actions">
                        <button
                            className="delete-btn"
                            onClick={() => handleDelete(item._id)}
                            disabled={deleting[item._id]}
                        >
                            {deleting[item._id] ? "Deleting..." : "Delete"}
                        </button>
                        <button
                            className="update-btn"
                            onClick={() => handleUpdate(item)}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </li>
        ))
    ) : (
        <p className="no-items-message">No menu items available. Add some!</p>
    )}
</ul>

        </div>
    );
};

export default MenuList;

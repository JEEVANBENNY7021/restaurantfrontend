import React, { useState } from 'react';
import MenuList from './MenuList';
import MenuDetails from './MenuDetails'; 
import './MenuDetails.css'
const CreateMenu = () => {
    const [items, setItems] = useState([]); 
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);  
    };

    const handleCloseDetails = () => {
        setSelectedItem(null);  
    };

    return (
        <div>
            <h2 style={{fontFamily:"initial"}}>Create Menu</h2>
            <MenuList items={items} onItemClick={handleItemClick} /> 
            <MenuDetails item={selectedItem} onClose={handleCloseDetails} /> 
        </div>
    );
};
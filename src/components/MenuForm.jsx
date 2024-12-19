import React, { useState, useEffect } from 'react';
import './MenuForm.css'; 
import { serverUrl } from "../services/serverUrl";

const MenuForm = ({ fetchMenuItems, selectedItem }) => {
    const [formData, setFormData] = useState({ name: '', description: '', price: '', menu: '' });

    useEffect(() => {
        if (selectedItem) {
            setFormData({
                name: selectedItem.name,
                description: selectedItem.description,
                price: selectedItem.price,
                menu: selectedItem.menu,
            });
        }
    }, [selectedItem]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = selectedItem ? 'PUT' : 'POST';
        const url = selectedItem
            ? `${serverUrl}/api/menu/${selectedItem._id}`
            : `${serverUrl}/api/menu`;

        try {
            const res = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error('Network response was not ok');
            await res.json();
            fetchMenuItems(); // Refresh the menu items list
            setFormData({ name: '', description: '', price: '', menu: '' }); // Reset form

            // Show success alert
            alert(selectedItem ? 'Menu item updated successfully!' : 'Menu item added successfully!');
        } catch (error) {
            console.error('Submit error:', error);
        }
    };

    return (
        <form className="menu-form" onSubmit={handleSubmit}>
            <h3>{selectedItem ? 'Update Menu Item' : 'Add Menu Item'}</h3>
            <div className="form-group">
                <label htmlFor="name">Item Name</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="menu">Menu Name</label>
                <select id="menu" name="menu" value={formData.menu} onChange={handleChange} required>
                    <option value="FOOD">FOOD</option>
                    <option value="DRINKS">DRINKS</option>
                    <option value="BRUNCH">BRUNCH</option>
                </select>
            </div>
            <button className="submit-btn" type="submit">
                {selectedItem ? 'Update Item' : 'Add Menu Item'}
            </button>
        </form>
    );
};

export default MenuForm;

import React, { useEffect, useState } from 'react';
import MenuForm from '../components/MenuForm';
import MenuList from '../components/MenuList';
import "./createMenu.css"
import { serverUrl } from "../services/serverUrl"
const CreateMenu = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null); 

    const fetchMenuItems = async () => {
        try {
            const res = await fetch(`${serverUrl}/api/menu`); 
            if (!res.ok) throw new Error('Network response was not ok');
            const data = await res.json();
            setItems(data); 

        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchMenuItems(); 
    }, []);

    return (
        <div style={{backgroundColor:"black"}}>
            <h2 style={{color:"white"}}>Create Menu</h2>
            <MenuForm fetchMenuItems={fetchMenuItems} selectedItem={selectedItem} />
            <MenuList
                items={items}
                fetchMenuItems={fetchMenuItems}
                setSelectedItem={setSelectedItem}
            />
        </div>
    );
};

export default CreateMenu;

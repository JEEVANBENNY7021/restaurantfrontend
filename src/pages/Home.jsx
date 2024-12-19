import React, { useEffect, useState } from "react";
import Listing from "../components/Listing"; 
import "./Home.css";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { serverUrl } from "../services/serverUrl"
const Home = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const [selected, setSelected] = useState("DRINKS"); 

    const handleClick = (buttonName) => {
        setSelected(buttonName);
    };
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
        <div>
            <div className="menu-container">
                <div className="menu-header">
                    <h1 style={{ fontFamily: "-moz-initial" }}>MENU</h1>
                    <p style={{ fontFamily: "-moz-initial" }}>Please take a look at our menu featuring food, drinks, and brunch...</p>
                    <Link to={'createmenu'}>
                        <button style={{
                            padding: '10px 20px',
                            backgroundColor: 'white',
                            color: 'black',
                            border: '4px solid black',
                            fontFamily: "-moz-initial",
                            borderRadius: '5px',
                            fontSize: '1rem',
                            marginTop:"50px",
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease'
                        }}>
                            MAKE YOUR OWN MENU
                        </button>
                    </Link>

                </div>
                <div id="menu">
                    <Listing items={items}
                        fetchMenuItems={fetchMenuItems}
                        setSelectedItem={setSelectedItem} /> 


                </div>
            </div>

            <div id="CONTACT"
                className="container1"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily:"initial",

    

                    backgroundColor: 'black', 
                }}
            >
                {/* Contact Info Section */}
                <div
                    className="contact-info"
                    style={{
                        flex: '1',
                        textAlign: 'center',
                        border: '2px solid white', 
                        borderRadius: '8px',
                        marginRight: '20px',
                        width: "360px"
                    }}
                >
                    <p style={{ fontWeight: 'bold', fontSize: '26px', color: "#00bfff" }}>CONNECT WITH US</p>
                    <p style={{ fontSize: '14px', margin: '5px 0' }}>
                        <a href="tel:+919567843340" style={{ color: ' white', textDecoration: 'none' }}>
                        <FaPhoneVolume />  +91 9567843340
                        </a>
                    </p>
                    <p style={{ fontSize: '14px', margin: '5px 0' }}>
                        <a href="mailto:info@deepnetsoft.com" style={{ color: ' white', textDecoration: 'none' }}>
                        <MdEmail />  info@deepnetsoft.com
                        </a>
                    </p>
                </div>

                {/* Company Logo Section */}
                <div
                    className="company-logo"
                    style={{
                        flex: '1',
                        textAlign: 'center',
                        border: '2px solid white', 
                        borderRadius: '8px',
                         width: "360px"
                    }}
                >
                    <img
                        src={logo}
                        alt="Deep Net Soft Logo"
                        style={{ maxWidth: '100px', marginBottom: '10px' }}
                    />
                    <p style={{ fontWeight: 'bold', fontSize: '26px', margin: '5px 0' }}>DEEP  <span style={{ color: "#00bfff" }}>NET</span> SOFT</p>
                    <div
                        className="social-icons"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            marginTop: '10px',
                        }}
                    >
                       <FaFacebook style={{color:"white",fontSize:"25px"}} />
                       <FaWhatsapp style={{color:"white",fontSize:"25px"}}  />
                       <FaTwitter  style={{color:"white",fontSize:"25px"}}/>
                       <FaLinkedin  style={{color:"white",fontSize:"25px"}} />
                        
                    </div>
                </div>

                {/* Find Us Section */}
                <div
                    className="find-us"
                    style={{
                        flex: '1',
                        textAlign: 'center',
                        marginLeft: '20px',
                         width: "360px",
                        border: '2px solid white ', // Add border
                        borderRadius: '8px',
                    }}
                >
                    <p style={{ fontWeight: 'bold', fontSize: '26px', color: "#00bfff" }}>FIND US</p>
                    <p style={{ fontSize: '14px', margin: '5px 0' }}>   <FaLocationDot />  First floor, Geo infopark,</p>
                    <p style={{ fontSize: '14px', margin: '5px 0' }}>Infopark EXPY, Kakkanad</p>
                </div>
            </div>

        </div>
    );
};

export default Home;

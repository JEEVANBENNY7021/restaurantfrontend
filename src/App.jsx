import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Createmenu from"./pages/CreateMenu"

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="createmenu" element={<Createmenu/>}/>
      </Routes>
      <Footer/>
    </Router>



  )
}

export default App;
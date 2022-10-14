import React, { useState } from "react";
import "./Navbar.css";
import {BsHouse} from 'react-icons/bs'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
    <span className="nav-logo"><BsHouse></BsHouse> REM</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/buyer">Buyer</a>
        <a href="/seller">Seller</a>
        <a href="/agent">Agent</a>
        <a href="/contact">ContactUs</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      
    </div>
  );
};

export default Navbar;
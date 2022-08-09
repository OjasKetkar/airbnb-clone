import React from "react";
import { ReactDOM } from "react";
import image from '../Airbnb logo.png'

function Navbar() {
    return(
        <div className="navbar">
            <img src={image} alt="logo"  className="nav-logo"/>
            
        </div>
    )
}

export default Navbar;
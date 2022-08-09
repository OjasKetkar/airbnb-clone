import React from "react";
import { ReactDOM } from "react";
import image from '../Group 77.png'
function Hero() {
    return(
        <div>
            <div className="hero">
                <img src={image} alt="image-cluster" className="cluster"/>

            </div>
            <div className="online-experiences">
                <b className="exp-header">Online Experiences</b>
                <h4>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </h4>
            </div>
        </div>
    )
}

export default Hero;
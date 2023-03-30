import React from "react";
import EL from '../img/EL.jpg';

import '../components/aboutus.css';

function Aboutus(){
    return(
        <div className="aboutUs" id="About">
            <p>About Us</p>
            <div className="aboutUsContainer">

                <div className="aboutUsDes">
                    <img src={EL} alt="" />
                    <h1>Manjunath D</h1>
                    <p>Founders</p>
                </div>

                <div className="aboutUsDes">
                    <img src={EL} alt="" />
                    <h1>Chandru Shekar N</h1>
                    <p>Founder</p>
                </div>

                <div className="aboutUsDes">
                    <img src={EL} alt="" />
                    <h1>Sheshadri Bharadwaj T</h1>
                    <p>Sales Manager</p>
                </div>

            </div>
        </div>
    )
}

export default Aboutus;


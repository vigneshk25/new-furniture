import React from "react";
import Images from "../image";

import '../components/aboutus.css';

function Aboutus(){
    return(
        <div className="aboutUs" id="About">
            <p>About Us</p>
            <div className="aboutUsContainer">

                <div className="aboutUsDes">
                    <img src={Images.profile1} alt=""  />
                    <h1>Manjunath D</h1>
                    <p>Founder</p>
                </div>

                <div className="aboutUsDes">
                    <img src={Images.profile2} alt="" />
                    <h1>Chandru Shekar N</h1>
                    <p>Founder</p>
                </div>

                <div className="aboutUsDes">
                    <img src={Images.profile3} alt="" />
                    <h1>Sheshadri Bharadwaj T</h1>
                    <p>Sales Manager</p>
                </div>

            </div>
        </div>
    )
}

export default Aboutus;


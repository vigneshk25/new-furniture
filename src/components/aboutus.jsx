import React from "react";
import per1 from '../img/person1.jpg';
import per2 from '../img/person2.jpg';
import per3 from '../img/person3.jpg';

import '../components/aboutus.css';

function Aboutus(){
    return(
        <div className="aboutUs" id="About">
            <p>About Us</p>
            <div className="aboutUsContainer">

                <div className="aboutUsDes">
                    <img src={per1} alt=""  />
                    <h1>Manjunath D</h1>
                    <p>Founder</p>
                </div>

                <div className="aboutUsDes">
                    <img src={per2} alt="" />
                    <h1>Chandru Shekar N</h1>
                    <p>Founder</p>
                </div>

                <div className="aboutUsDes">
                    <img src={per3} alt="" />
                    <h1>Sheshadri Bharadwaj T</h1>
                    <p>Sales Manager</p>
                </div>

            </div>
        </div>
    )
}

export default Aboutus;


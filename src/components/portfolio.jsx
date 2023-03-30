import React, { useState } from "react";
import imag from '../img/11.jpg';
import imag1 from '../img/10.jpg';
import imag2 from '../img/8.jpg';
import imag3 from '../img/9.jpg';

import "../components/portfolio.css";



function Portfolio(){
    return(
        <div className="portfolio" id="Gallery">
                <div className="portfolioTop">
                    <div className="portfolioText">
                        <p>Our Portfolio</p>
                        <h2>We build creative home theater designs</h2>
                    </div>

                    <div className="portfolioImages">
                        <img src={imag} alt="img" />
                        <img src={imag2} alt="img" />
                        <img src={imag1} alt="img" />
                        <img src={imag3} alt="img" />
                    </div>

                    <div className="portfolioProjects">
                            <h4>view all projects </h4>
                    </div>

                </div>
            </div>
    )
}

export default Portfolio;



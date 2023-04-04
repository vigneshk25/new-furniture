import React from "react";
import {Link} from 'react-router-dom';
import "../components/portfolio.css";
import portfolio1 from '../img/8.jpg';
import portfolio2 from '../img/9.jpg';
import portfolio3 from '../img/10.jpg';
import portfolio4 from '../img/11.jpg';



function Portfolio(){
    return(
        <div className="portfolio" id="Gallery">
                <div className="portfolioTop">
                    <div className="portfolioText">
                        <p>Our Portfolio</p>
                        <h2>We build creative home theater designs</h2>
                    </div>

                    <div className="portfolioImages">
                        <img src={portfolio1} alt="" />
                        <img src={portfolio2} alt="" />
                        <img src={portfolio3} alt="" />
                        <img src={portfolio4} alt="" />
                        
                    </div>

                    <div className="portfolioProjects">
                            
                            <Link to="/gallery"><h4 className="h4">view all projects </h4></Link>
                    </div>

                </div>
            </div>
    )
}

export default Portfolio;



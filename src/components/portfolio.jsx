import React from "react";
import {Link} from 'react-router-dom';
import Images from "../image";
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
                        <img src={Images.Portfolio1} alt="" />
                        <img src={Images.Portfolio2} alt="" />
                        <img src={Images.Portfolio3} alt="" />
                        <img src={Images.Portfolio4} alt="" />
                    </div>

                    <div className="portfolioProjects">
                            
                            <Link to="/gallery"><h4 className="h4">view all projects </h4></Link>
                    </div>

                </div>
            </div>
    )
}

export default Portfolio;



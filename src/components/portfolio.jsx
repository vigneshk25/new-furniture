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
                    <div className="portfolioText" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000">
                        <p>Our Portfolio</p>
                        <h2>We build creative home theater designs</h2>
                    </div>

                    <div className="portfolioImages" >
                        <img src={portfolio1} alt="" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000" />
                        <img src={portfolio2} alt="" data-aos="fade-left" data-aos-delay="80"  data-aos-duration="3000" />
                        <img src={portfolio3} alt="" data-aos="fade-left" data-aos-delay="60"  data-aos-duration="3000" />
                        <img src={portfolio4} alt="" data-aos="fade-left" data-aos-delay="40"  data-aos-duration="3000" />
                        
                    </div>

                    <div className="portfolioProjects">
                            
                            <Link to="/gallery"><h4 className="h4" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000">view all projects </h4></Link>
                    </div>

                </div>
            </div>
    )
}

export default Portfolio;



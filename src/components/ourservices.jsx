import React from "react";
import "../components/ourservices.css";
import homeThe from '../img/home theater.jpg';
import wall from '../img/wall.jpg';
import homeAutomation from '../img/HomeAutomation.jpg';
import seats from '../img/seats.jpg';
import star from '../img/star.jpg';

function Ourservices() {
  return (
    <div className="ourServices" id="Service">
      <div className="topSecServices">
        <p>Our Services</p>
        <h2>Luxury Cinematic Experience at Home</h2>
      </div>

      <div className="servicesFlex">
        {/* 1st one */}
        <div className="insideServices">
          <img
            src={homeThe}
            alt=""
          />
          <h4>Complete Home Theater Soulutions</h4>
          <p>
          A home theater can be an incredible investment in your family's bonding time and the primary hangout spot for your circle of friends. It's a luxury your whole family will enjoy as you watch movies, cheer on your favorite team together, or even host an epic video game tournament.
          </p>
          
        </div>

        {/* 2nd image */}
        <div className="insideServices">
          <img
            src={wall}
            alt=""
          />
          <h4>Premium quality Acoustic wall</h4>
          <p>
          Sound & Acoustics are a great pathway to improve the listening conditions both indoors & outdoors.
          </p>
        </div>

        {/* 3rd image */}
        <div className="insideServices">
          <img
            src={homeAutomation}
            alt=""
          />
          <h4>Home Automation</h4>
          <p>
          Control everything from your phone or tablet Automate your home for a more convenient life
          </p>
        </div>
      
         {/*4th image */}
         <div className="insideServices">
          <img
            src={seats}
            alt=""
          />
          <h4>Customies Your Recliner Seats</h4>
          <p>
               Our recliner customisation service allows you to personalise your recliner to fit your exact needs. With our range of upholstery and styles, you can choose the perfect look and feel for your recliner. We also offer a range of add-on accessories options, like switches, cupholders, touch panel, tables, lights, etc.  
          </p>
        </div>

         {/* 5th image */}
         <div className="insideServices">
          <img
            src={star}
            alt=""
          />
          <h4>OFC Star Ceiling</h4>
          <p>
          This stars on the ceiling of this movie theater add to the ambiance of similarly themed movies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;

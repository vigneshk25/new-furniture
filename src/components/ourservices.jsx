import React from "react";
import "../components/ourservices.css";
import homeThe from '../img/home theater.jpg';
import wall from '../img/wall.jpg';
import homeAutomation from '../img/HomeAutomation.jpg';
import seats from '../img/seats.jpg';
import star from '../img/star.jpg';
import img1 from '../img/cine images/1.jpg';
import img2 from '../img/cine images/2.jpg';
import img3 from '../img/cine images/3.png';
import img4 from '../img/cine images/4.jpg';
import img5 from '../img/cine images/5.jpg';
import img6 from '../img/cine images/6.jpg';


function Ourservices() {
  return (
    <div className="ourServices" id="Service">
      <div className="topSecServices" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000" >
        <p>Our Services</p>
        <h2>Luxury Cinematic Experience at Home</h2>
      </div>

      <div className="servicesFlex">
        {/* 1st one */}

          <div className="insideServices" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000" >
            <img src={homeThe} alt=""/>
            <h4>Complete Home Theater Sollutions</h4>
            <p>A home theater can be an incredible investment in your family's bonding time and the primary hangout spot for your circle of friends. It's a luxury your whole family will enjoy as you watch movies, cheer on your favorite team together, or even host an epic video game tournament.</p>
        </div>

        <div className="insideServices" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000">
          <div className="prod_flex">
            <div>
            <img src={img1} alt=""/>
            <p>speaker</p>
          </div>

          <div>
            <img src={img2} alt=""/>
            <p>AV Receivers</p>
          </div>

          <div>
            <img src={img3} alt=""/>
            <p>Screens</p>
          </div>

          <div>
            <img src={img4} alt=""/>
            <p>Projector</p>
          </div>

          <div>
            <img src={img5} alt=""/>
            <p>Cables</p>
          </div>

          <div>
            <img src={img6} alt=""/>
            <p>Acoustic Matrtials</p>
          </div>
        </div>
        </div>

        {/* 2nd image */}
        <div className="insideServices" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000" >
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
        <div className="insideServices" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000">
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
         <div className="insideServices" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000">
          <img
            src={seats}
            alt=""
          />
          <h4>Customize Your Recliner Seats</h4>
          <p>
               Our recliner customisation service allows you to personalise your recliner to fit your exact needs. With our range of upholstery and styles, you can choose the perfect look and feel for your recliner. We also offer a range of add-on accessories options, like switches, cupholders, touch panel, tables, lights, etc.  
          </p>
        </div>

         {/* 5th image */}
         <div className="insideServices" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000">
          <img
            src={star}
            alt=""
          />
          <h4>OFC Star Ceiling</h4>
          <p>
          This stars on the ceiling of this movie theater add to the Ambience of similarly themed movies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;

import React, { useState, useEffect } from "react";
// Background Images
import BG1 from '../img/BG1.jpg';
import BG4 from '../img/BG4.jpg';
import BG5 from '../img/9.jpg';
import Whatsapp from '../img/whatsapp.png';
import "../components/header.css";

function Header() {
  const [selectImg, setSelectImg] = useState(0);
  const [allImg] = useState([BG1,BG4,BG5,BG4,BG5]);

  useEffect(() => {
    setInterval(() => {
      setSelectImg((selectImg) => (selectImg <4 ? selectImg + 1 : 0));
    }, 2000);
  }, []);

  return (
    <header id="home">
      <div>
        <a href="http://wa.me/+918496955369">
          <img className="wtsapp" src={Whatsapp} alt="" />
        </a>
      </div>

      <div className="phonewtsapp">
        <a href="http://wa.me/+918496955369">
          <img className="wtsapp" src={Whatsapp} alt="" />
        </a>
      </div>
      <div className="headImg">
        <img
          src={allImg[selectImg]}
          width="100%"
          height="90%"
          className="bgimg"
          alt=""
        />

        <div className="headText" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000" >
          <h1>Luxury Home Theater – The Fastest Growing Home Tech Trend</h1>
          {/* <p>Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto</p> */}
          <p>Bring in Entetainment at your finger Tips</p>
          <button className="contBtn" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000" ><a  href="http://wa.me/+918496955369" style={{color:"black"}}> Contact</a></button>
        </div>
      </div>


      <div className="quotes" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="1000" >
        <p className="quo_p" data-aos="fade-left" data-aos-delay="150"  data-aos-duration="3000" > <span className="hold" > Cinetrendz </span> offers the best end-to-end home theatre solution from consulting, design, acoustics, material planning and execution, ensuring a hassle free and time and time saving experience with uncompromising quality!</p>
      </div>
    </header>
  );
}

export default Header;

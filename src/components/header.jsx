import React, { useState, useEffect } from "react";
// Background Images
import BG1 from '../img/BG1.jpg';
import BG2 from '../img/BG2.jpg';
import BG3 from '../img/BG3.jpg';
import BG4 from '../img/BG4.jpg';
import BG5 from '../img/9.jpg';
import Whatsapp from '../img/whatsapp.png';
import "../components/header.css";

function Header() {
  const [selectImg, setSelectImg] = useState(0);
  const [allImg] = useState([BG1, BG2,BG3,BG4,BG5]);

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
      <div className="headImg">
        <img
          src={allImg[selectImg]}
          width="100%"
          height="90%"
          className="bgimg"
          alt=""
        />

        <div className="headText">
          <h1>Luxury Home Theater – The Fastest Growing Home Tech Trend</h1>
          {/* <p>Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto</p> */}
          <p>Bring in Entetainment at your finger Tips</p>
          <button className="contBtn"><a  href="http://wa.me/+918496955369" style={{color:"black"}}> Contact</a></button>
        </div>
      </div>
    </header>
  );
}

export default Header;

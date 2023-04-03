import React, { useState, useEffect } from "react";

// Background Images
import Images from "../image";
import "../components/header.css";

function Header() {
  const [selectImg, setSelectImg] = useState(0);
  const [allImg] = useState([Images.BG1, Images.BG2, Images.BG3, Images.BG4,Images.img12]);

  useEffect(() => {
    setInterval(() => {
      setSelectImg((selectImg) => (selectImg <4 ? selectImg + 1 : 0));
    }, 2000);
  }, []);

  return (
    <header id="home">
      <div>
        <a href="http://wa.me/+918496955369">
          <img className="wtsapp" src={Images.WhatsApp} alt="" />
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

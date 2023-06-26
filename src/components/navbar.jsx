import React, { useRef } from "react";
import "../components/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom';
import whtsapp from '../img/whatsapp.png';
import phone from '../img/telephone.png';
import mail from '../img/email.png';
import logoC from '../img/logo.png';
import address from '../img/marker.png';


function Navbar() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  const onClose = () => {
    navRef.current.classList.toggle(
			"responsive_nav"
		);
  }
  return (
    <header className="navBar" id="topNav">
      <img src={logoC} alt="" className="logoC" data-aos="fade-down" data-aos-delay="100"  data-aos-duration="1000" />
      <nav ref={navRef} className="navinside">
          <Link to='/' onClick={onClose}> Home</Link>
          <a href="/#Service" onClick={onClose}>Service</a>
          <a href="/#Gallery"  onClick={onClose}>Gallery</a>
          <a href="/#getIn"  onClick={onClose}>Contact</a>
          <a href="/#About" className="whyus"  onClick={onClose}>Why us?</a>

          <div className="logo" id="logonav">
              <a href="http://wa.me/+917795382526" ><img src={whtsapp} alt="" /></a>
              <a href="tel:+918217229947"><img src={phone} alt="" /></a>
              <a href="mailto:support@gmail.com"> <img src={mail} alt="" /></a>
              <a href="https://goo.gl/maps/MENWpWngERJbp8Jq7"><img src={address} alt="" /></a>
          </div>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

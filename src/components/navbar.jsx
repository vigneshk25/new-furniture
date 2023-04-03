import React, {useEffect, useState} from "react";
import Images from "../image";
import '../components/navbar.css';


function Navbar() {
    const [active,setActive] = useState('!navMenu');
        const [toogleIcon, setToggleIcon] = useState('!navToggler');
        const [color , setColor] = useState (false);


        useEffect(()=>{
          navToggle();
        },[])
        const navToggle = () =>{
            // active === 'navMenu ' 
            // ? setActive('navMenu navActive')
            // :setActive('navMenu');

            if('navMenu' === active ){
              setActive('navMenu navActive')
            }else {
              setActive('navMenu')
            }

        

            // toogle animation 
            toogleIcon === 'navToggler' 
            ? setToggleIcon('navToggler toggler')
            : setToggleIcon('navToggler')
            
            // nav bar

            const changeBG = () => {
             if(window.scrollY < 10){
              setColor(true)
             }else{
              setColor(false)
             }
            }
            window.addEventListener('scroll', changeBG)


            // if(toogleIcon.style.display === 'block'){
            //   toogleIcon.style.display === 'none';
            // }else{
            //   toogleIcon.style.display === 'block'
            // }
            
            

        }
  return (
      <nav className={color ? 'navbarAc' : 'nav'}>
        <a href="#home" className="navBrand">
        Cinetrendz
        </a>
        <ul className={active}>
          <li className="navItem">
            <a href="#home" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="#Service" className="navLink">
            Service
            </a>
          </li>
          <li className="navItem">
            <a href="#Gallery" className="navLink">Gallery</a>
            {/* <ul className="navDown act">
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul> */}
          </li>
          <li className="navItem">
            <a href="#About" className="navLink">
              About Us
            </a>
          </li>

          <div className="logo">
          <a href="http://wa.me/+917795382526" ><img src={Images.WhatsApp} alt="" /></a>
          <a href="tel:+918217229947"><img src={Images.phone} alt="" /></a>
          <a href="mailto:support@gmail.com"> <img src={Images.Mail} alt="" /></a>
          <a href="https://goo.gl/maps/MENWpWngERJbp8Jq7"><img src={Images.Mail} alt="" /></a>
        </div>
        </ul>

        <div onClick={navToggle} className={toogleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        
      </nav>
  );
}

export default Navbar;

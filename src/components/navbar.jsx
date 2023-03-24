import React, {useEffect, useState} from "react";
import '../components/navbar.css';



function Navbar() {
    const [active,setActive] = useState('navMenu');
        const [toogleIcon, setToggleIcon] = useState('navToggler');
        const [color , setColor] = useState (false);

        useEffect(()=>{
          navToggle();
        },[])
        const navToggle = () =>{
            active === 'navMenu' 
            ? setActive('navMenu navActive')
            :setActive('navMenu');

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
            console.log("line:29")
            }
            window.addEventListener('scroll', changeBG)

            

        }
  return (
      <nav className={color ? 'navbarAc' : 'nav'}>
        <a href="#" className="navBrand">
        Cinetrendz
        </a>
        <ul className={active}>
          <li className="navItem">
            <a href="#" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
            Service
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              Products
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              Contact
            </a>
          </li>
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

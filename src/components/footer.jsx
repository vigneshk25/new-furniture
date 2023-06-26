import React from "react";
// Icon images
import "../components/footer.css";
import phone from '../img/telephone.png';
import mail from '../img/email.png';
import address from '../img/marker.png';
import logoC from '../img/logo.png';
import insta from '../img/insta.gif';
import fb from '../img/fb.gif';
import yt from '../img/yt.gif';



function Footer(){
    return(
        <div className="footer">

                <div className="footerHead">
                    <div className="brandName">
                        <img src={logoC} alt=""  className="logoCF" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000" />

                        <div>
                        <div className="footer_social" >
                    <a href="https://www.instagram.com/cinetrendzofficial/" target='_blank' rel='noreferrer noopener'>
                        <img src={insta} alt="" className='social_media' />
                    </a>
                        <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener' >
                            <img src={fb} alt="" className='social_media' />
                        </a>
                        <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener' >
                                <img src={yt} alt="" className='social_media' />
                        </a>
                </div>
                        </div>
                    </div>
                <div className="flex" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000">
                    <div className="contact">
                        <div className="phone">
                        <img src={phone} alt="phone" />
                        <h2>Contact</h2>
                        </div>
                        <p><a className="phoneNumber" href="tel:+918496955369">+91 84969 55369</a></p>

                        <div className="phone">
                        <img src={mail} alt="mail" />
                        <h2>Mail</h2>
                        </div>
                        <p>cinetrendzindia@gmail.com</p>
                    </div>

                    <div className="address">
                        <div className="location">
                            <img src={address} alt="" />
                            <h1>Address</h1>
                        </div>
                        <h5>Demo Center</h5>
                        <p>#447, 1st Floor, BEML, HBCS Layout, 1st stage, Basaveshwaranagar, Bengaluru - 560079</p>
                    </div>
                </div>
            </div>

                <div className="copyright">
                    <p>Copyright © 2023 | All Rights Cinetrendz</p>
                </div>
            </div>
    )
}

export default Footer;
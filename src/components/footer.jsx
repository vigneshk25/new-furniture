import React, {useState} from "react";

import phone from '../img/telephone.png';
import mail from '../img/email.png';
import address from '../img/location.png';
import wtsapp from '../img/whatsapp.png'
import "../components/footer.css";


function Footer(){
    return(
        <div className="footer">

                <div className="footerHead">
                    <div className="brandName">
                        <h1>Cinetrendz</h1>
                    </div>
                <div className="flex">
                    <div className="contact">
                        <div className="phone">
                        <img src={phone} alt="phone" />
                        <h2>Contact</h2>
                        </div>
                        <p><a href="tel:+918217229947">+91 98765 43210</a></p>

                        <div className="phone">
                        <img src={mail} alt="mail" />
                        <h2>Mail</h2>
                        </div>
                        <p>info@gamil.com</p>
                    </div>

                    <div className="address">
                        <div className="location">
                            <img src={address} alt="" />
                            <h1>Address</h1>
                        </div>
                        <p>#32 , 13th cross main road , Bengaluru 560023</p>
                    </div>
                </div>
            </div>

                <div className="copyright">
                    <p>Copyright © 2023 | All Rights Simple</p>
                </div>
            </div>
    )
}

export default Footer;
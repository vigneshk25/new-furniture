import React from "react";
// Icon images
import Images from "../image";
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
                        <img src={Images.phone} alt="phone" />
                        <h2>Contact</h2>
                        </div>
                        <p><a href="tel:+918496955369">+91 84969 55369</a></p>

                        <div className="phone">
                        <img src={Images.Mail} alt="mail" />
                        <h2>Mail</h2>
                        </div>
                        <p>cinetrendzindia@gmail.com</p>
                    </div>

                    <div className="address">
                        <div className="location">
                            <img src={Images.Address} alt="" />
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
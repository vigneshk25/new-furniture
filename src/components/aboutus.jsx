import React, { useState } from "react";
import note from '../img/note.gif';
import clock from '../img/clock.gif';
import movie from '../img/movie.gif';
import doc from '../img/dovu.gif';

import '../components/aboutus.css';

function Aboutus(){

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [query, setQuery] = useState("");
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const message = `Hello, Welcome to Cinetrendz, Thank You for Contacting us
          +%0A+
          +%0A+
          Name: +%2a${name}%2a
          +%0A
          Email: +%2a${email}%2a
          +%0A
          Phone: +%2a${phone}%2a
          +%0A
          Query: +%2a${query}%2a
          `;
          const whatsappLink = `https://wa.me/8496955369?text=${message}`;
          window.open(whatsappLink, "_blank");}

    return(
        <>
        <div className="aboutUs" id="About">
            <p data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000">About Us</p>
            <div className="aboutUsContainer">

                <div className="aboutUsDes" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000">
                    <h1>Manjunath D</h1>
                    <p>Founder</p>
                </div>

                <div className="aboutUsDes" data-aos="fade-right" data-aos-delay="500"  data-aos-duration="3000">
                    <h1>Chandru Shekar N</h1>
                    <p>Founder</p>
                </div>

                <div className="aboutUsDes" data-aos="fade-right" data-aos-delay="800"  data-aos-duration="3000">
                    <h1>Sheshadri Bharadwaj T</h1>
                    <p>Sales Manager</p>
                </div>

            </div>
       

        <div className="whyweare">
        <div className="whowe" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000">
          <img src={note} alt="" />
            <h3>WHO WE ARE ?</h3>
            <p>We are an advanced systems integrator of visual communication products, projects, technologies design and services. We will design your vision and produce a system that meets your specific requirements using quality equipment and is easy to use.</p>
        </div>

        <div className="whowe" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000">
          <img src={movie} alt="" />
            <h3>WHAT WE DO ?</h3>
            <p>cnetrendz is a full function Audio and Video Systems Design and Integration company. We take pride in listening to what you, our customer is passionate about and build a system to meet your lifestyle and expectations.</p>
        </div>

        <div className="whowe" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="3000">
          <img src={clock} alt="" />
            <h3>WHY US ?</h3>
            <p>Our mission at Bluewave is to provide our clients with tailor made audio visual integrated systems that suit their needs. We aim to offer customised solutions in telecommunications and document solution products that suffice their quality and economic demands.</p>
          </div>

      </div>
      </div>







    <form onSubmit={handleSubmit} id="getIn">
      <div className="getInTouch">
        <div  data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000">

          <div className="icons">
          <img src={doc} alt="" className="doc" />
          <h1>Get in Touch</h1>
          </div>
          <p>Let us know how we can help </p>
        </div>

        <div className="inputBox" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000">
          <p className="textName">Name</p>
          <input
            type="text"
            name="name"
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Your Full Name"
          />

          <div div className="icon">
          <p className="textName" >Email Address</p>        
          </div>    
                <input
            type="text"
            name="email"
            id="email"
            placeholder="me@mail.com"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="icon">
          <p className="textName" >Phone Number</p>        
          </div>    
          <input
            type="text"
            name="phone"
            required={true}
            id="phone"
            placeholder="+91 00000 00000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="icon">
          <p className="textName" >Query</p>        
          </div>            
          <textarea
            rows={5}
            maxLength={240}
            type="text"
            name="email"
            id="query"
            placeholder="Enter your query/message"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            <button className="msgBtn">Send Message</button>
          </div>
        </div>
     

        
        <iframe data-aos="fade-right" data-aos-delay="100"  data-aos-duration="3000" className='maps' title='kalpavruksha Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6774201148255!2d77.52953057473486!3d12.99247228732482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df84774f50b%3A0xd03898f1ecc72e42!2sCinetrendz!5e0!3m2!1sen!2sin!4v1687761891356!5m2!1sen!2sin"
       width="600"
        height="300"
         style={{border:"100"}}
          allowFullScreen={true}
           loading="eager"
            referrerPolicy="no-referrer-when-downgrade">
              

            </iframe>

             </div>
    </form>
        </>
        
    )
}

export default Aboutus;


import React, { useState } from "react";
import imag1 from '../img/10.jpg';
import imag2 from '../img/8.jpg';

import "../components/furniture.css";

function Furniture() {
  return (
    <div>
      <div className="aboutProct">
        <div className="aboutFurniture">
          <div className="furnitureImageFlex">
            <img src={imag1} alt="" />
          </div>

          <div className="furnitureText">
          <h1>Automation & Theater Experience Zones</h1>
            <p>
            Experience what home automation and home entertainment can do to your home at any of our experience zones located in each our offices. The range of possibilities that open up when you have a smart home are limitless. It can only be experienced to believe.</p>
          </div>
        </div>
      </div>

      <div className="aboutProct">
        <div className="aboutFurniture">
          <div className="furnitureText">
            <h1>Automation & Theater Experience Zones</h1>
            <p>
            There is magic in the air and it’s called technology. In this golden age of technology where adding ‘smart’ to every aspect of life is the way ahead, Tekdynamics adds ‘intuitive smartness’ to your homes. This translates into considering your sanctuary of safety, serenity and solace as more than a mere functional space.</p>
          </div>

          <div className="furnitureImageFlex">
            <img src="https://tekdynamics.in/images/landscape-420x240/intro-tekdynamics.jpg#joomlaImage://local-images/landscape-420x240/intro-tekdynamics.jpg?width=1280&height=796" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;

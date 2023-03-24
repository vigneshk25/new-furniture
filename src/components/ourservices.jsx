import React, { useState } from "react";

import "../components/ourservices.css";

function Ourservices() {
  return (
    <div className="ourServices">
      <div className="topSecServices">
        <p>Our Services</p>
        <h2>We build creative interior design</h2>
      </div>

      <div className="servicesFlex">
        {/* 1st one */}
        <div className="insideServices">
          <img
            src="https://auraacoustic.com/wp-content/uploads/2022/11/wall-1-300x169.jpg"
            alt="image"
          />
          <h4>Acoustic walls</h4>
          <p>
            Aura Acoustic Cluster is well suited for surroundings in ceiling
            application and wall too. The cluster can be finished off in
            different fabrics.
          </p>
        </div>

        {/* 2nd image */}
        <div className="insideServices">
          <img
            src="https://auraacoustic.com/wp-content/uploads/2022/11/wall-1-300x169.jpg"
            alt="image"
          />
          <h4>Acoustic walls</h4>
          <p>
            Aura Acoustic Cluster is well suited for surroundings in ceiling
            application and wall too. The cluster can be finished off in
            different fabrics.
          </p>
        </div>

        {/* 3rd image */}
        <div className="insideServices">
          <img
            src="https://auraacoustic.com/wp-content/uploads/2022/11/wall-1-300x169.jpg"
            alt="image"
          />
          <h4>Acoustic walls</h4>
          <p>
            Aura Acoustic Cluster is well suited for surroundings in ceiling
            application and wall too. The cluster can be finished off in
            different fabrics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;

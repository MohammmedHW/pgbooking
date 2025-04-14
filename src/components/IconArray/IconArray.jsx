import React from "react";
import { FaHome, FaMapMarkerAlt, FaRupeeSign, FaShieldAlt } from "react-icons/fa";
import "./IconArray.css";

const IconArray = () => {
  return (
    <>
    <section className="icon-wrapper">
      <div className="paddings innerWidth flexCenter icon-container">
        <div className="icon-item">
          <FaHome className="icon" />
          <p>Verified Properties</p>
        </div>
        <div className="icon-item">
          <FaMapMarkerAlt className="icon" />
          <p>Prime Locations</p>
        </div>
        <div className="icon-item">
          <FaRupeeSign className="icon" />
          <p>Affordable Prices</p>
        </div>
        <div className="icon-item">
          <FaShieldAlt className="icon" />
          <p>Safety & Security</p>
        </div>
      </div>
    </section>


    <section className="vdo-wrapper">
      <div className="paddings innerWidth vdo-container">
        <div className="video-card">
          <video autoPlay muted loop>
            <source  src="/hero-vd3.mp4"/>
          </video>
        </div>
        <div className="video-card">
          <video autoPlay muted loop>
            <source  src="/hero-vd2.mp4"/>
          </video>
        </div>
      </div>
    </section>
    </>
  );
};

export default IconArray;

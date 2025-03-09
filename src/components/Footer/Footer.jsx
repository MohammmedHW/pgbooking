import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="" alt="Logo Image" />
          <span className="secondaryText">
            Our Vision is to make all people <br />
            have best place to live for them.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">"Location"</span>

          <div className="flexCenter f-menu">
            <span><a href="#r-wrapper">Residencies</a></span>
            <span><a href="">Terms</a></span>
            <span><a href="">Policy</a></span>
            <span><a href="#c-wrapper">Contact</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

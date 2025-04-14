import React from "react";
import "./Hero.css";
import "../../index.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Hero */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover
              <br />
              Most Suitable <br />
              Home
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of apartments that suits you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1} end={12} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Rooms & PGs</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={68} end={80} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Renters</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8} end={20} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Years of Trust</span>
            </div>
          </div>
        </div>

        {/* Right hero */}
        <div className="flexCenter hero-right">
          <motion.div
           initial = {{x: "7rem", opacity: 0}}
           animate = {{ x : 0, opacity : 1}}
           transition={{
            duration : 2,
            type : "spring"
           }}
           className="image-container">
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

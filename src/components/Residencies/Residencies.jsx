import React, { useState } from "react";
import "./Residencies.css";
import "swiper/css";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide } from "swiper/react"; // Removed useSwiper import
import { sliderSettings } from "../../utils/common";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // If you want to navigate on card click

const Residencies = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    // For example, navigate to the booking form with card data
    navigate("/booking", { state: { residencyData: card } });
  };

  return (
    <section className="r-wrapper" id="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Finest Rentals</span>
        </div>

        <Swiper {...sliderSettings} onSwiper={(swiper) => setSwiperInstance(swiper)}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <motion.div 
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.1 * (i + 1),
                  type: "spring"
                }}
                className="flexColStart r-card"
                onClick={() => handleCardClick(card)}
                style={{ cursor: "pointer" }}
              >
                <img src={card.image} alt="Home-image" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange", fontWeight: "600", marginRight: "3px" }}>
                    ₹
                  </span>
                  <span>{card.price}</span>
                </span>
                <div className="primaryText">{card.name}</div>
                <div className="secondaryText">{card.detail}</div>
              </motion.div>
            </SwiperSlide>
          ))}
          {/* Place slider buttons inside Swiper so they have access to the instance */}
          <SliderButtons swiper={swiperInstance} />
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = ({ swiper }) => {
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper && swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper && swiper.slideNext()}>&gt;</button>
    </div>
  );
};

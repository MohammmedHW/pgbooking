import React, { useState, useRef } from "react";
import "./Header.css";
import "../../index.css";
import { HiMenuAlt3 } from "react-icons/hi"; 
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuIconRef = useRef(null);

  // Adjusted getMenuStyles to return correct style values
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "8%" : "-100%" };
    }
    return {};
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="/logo_new.png" alt="Logo" width={150} />
        <OutsideClickHandler
          onOutsideClick={(e) => {
            if (menuIconRef.current && menuIconRef.current.contains(e.target)) {
              return;
            }
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="">Home</a>
            <a href="#r-wrapper">Residencies</a>
            <a href="#v-wrapper">Our Values</a>
            <a href="">Our Terms</a>
            <a href="">Our Policy</a>
            <a href="">Contact-Us</a>
            {/* <button className="button">
              <a href="#c-wrapper">Contact</a>
            </button> */}
            {/* <button className="button login-btn">
              <a href="#">Login</a>
            </button>
            <button className="button signup-btn">
              <a href="#">Sign up</a>
            </button> */}
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          ref={menuIconRef}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <HiMenuAlt3 size={30}/>
        </div>
      </div>
    </section>
  );
};

export default Header;







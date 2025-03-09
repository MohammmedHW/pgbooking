import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown, MdCall, MdVideocam, MdGroup  } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import "./Home.css";
import data from "../../utils/accordion";

const Home = () => {
  return (
    <>
      {/* // OUR VALUES SECTION */}
      <section className="v-wrapper" id="v-wrapper">
  <div className="paddings innerWidth flexCenter v-container">
    {/* left part */}
    <div className="v-left">
      <div className="image-container">
        <img src="./value.png" alt="Image" />
      </div>
    </div>
    {/* right part */}
    <div className="flexColStart v-right">
      <span className="orangeText">Our Values</span>
      <span className="primaryText">Value we give to you</span>
      <span className="secondaryText">
        We are always ready to help you by providing the best services for you.
        <br />
        We believe a good place to live can make your life better.
      </span>

      <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="accordion">
        {data.map((item, i) => (
          <AccordionItem className="accordionItem" key={i} uuid={i}>
            <AccordionItemHeading>
              <AccordionItemButton className="flexCenter accordionButton">
                <AccordionItemState>
                  {({ expanded }) => {
                    const itemClass = expanded ? "expanded" : "collapsed";
                    return (
                      <>
                        <div className={`flexCenter icon ${itemClass}`}>
                          {item.icon}
                        </div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </>
                    );
                  }}
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="secondaryText">{item.detail}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>


      {/* //CONTACT SECTION */}
      <section className="c-wrapper" id="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/* left side */}
          <div className="flexColStart c-left">
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">
              We are always ready to help ny providing service to you, we
              believe a good blace to live can make your life better
            </span>

            <div className="flexColStart contactModes">
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">"Phone Number"</span>
                    </div>
                  </div>
                  <div className="flexCenter button">
                    <a href="tel:+">Call Now</a>
                  </div>
                </div>

                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat</span>
                      <span className="secondaryText">"Phone Number"</span>
                    </div>
                  </div>
                  <div className="flexCenter button">
                    <a href="https://wa.me/0123456789">Chat Now</a>
                  </div>
                </div>
              </div>

              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdVideocam size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video Call</span>
                      <span className="secondaryText">"detail"</span>
                    </div>
                  </div>
                  <div className="flexCenter button">
                    <a href="tel:+">Video Call Now</a>
                  </div>
                </div>

                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdGroup size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Visit</span>
                      <span className="secondaryText">"Location"</span>
                    </div>
                  </div>
                  <div className="flexCenter button">
                    <a href="#footer">Know Address</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="c-right">
            <div className="image-container">
              <img src="./contact.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </section>


      {/* call to action */}
      <section className="g-wrapper">
  <div className="paddings innerWidth g-container">
    <div className="flexColCenter inner-container">
      <span className="primaryText">Get Started with "Company"</span>
      <span className="secondaryText" style={{maxWidth : "600px"}}>
       Take the first step toward a better living experience and find the perfect residence that truly feels like home.
      </span>
      <button className="button">
        <a href="mailto:">Consult Now</a>
      </button>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;

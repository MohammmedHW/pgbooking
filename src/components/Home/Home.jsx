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
import {
  MdOutlineArrowDropDown,
  MdCall,
  MdVideocam,
  MdGroup,
} from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import "./Home.css";
import data from "../../utils/accordion";

const Home = () => {
  const [activeMapUrl, setActiveMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2987555269424!2d72.52773437477093!3d23.049506215323678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84afa873ac69%3A0xa85e037b9922fe81!2sSterling%20Park!5e0!3m2!1sen!2sin!4v1744537059110!5m2!1sen!2sin"
  );

  const locations = [
    {
      label: "Address 1",
      address:
        "3A starling park Bunglow nr starling hospital Gurukul memnagar Ahmedabad, 380052",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2987555269424!2d72.52773437477093!3d23.049506215323678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84afa873ac69%3A0xa85e037b9922fe81!2sSterling%20Park!5e0!3m2!1sen!2sin!4v1744537059110!5m2!1sen!2sin",
    },
    {
      label: "Address 2",
      address:
        "1&4 optima Bunglow plot no 60 nr vishwbharti school bhaikaka nagar Thaltej metrostend Thaltej Ahmedabad, 380059",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.021965659929!2d72.51245511565278!3d23.053621310568833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5429c635a7%3A0x652b4b54d99a963d!2s60%2C%20Bhaikakanagar%2C%20Thaltej%2C%20Ahmedabad%2C%20Gujarat%20380059!5e0!3m2!1sen!2sin!4v1744544262995!5m2!1sen!2sin",
    },
    {
      label: "Address 3",
      address:
        "Bunglow no 238 Nr magan vadi ni same premchand nagar Mansi setelight Ahmedabad, 380054",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0436000480936!2d72.51982637476944!3d23.03272871760621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f46b7e2167%3A0x9d1b8e8e3c9a19b5!2sPremchand%20Nagar%20Rd%2C%20Satellite%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1744561000000!5m2!1sen!2sin",
    },
  ];

  const mapouterStyle = {
    position: "relative",
    textAlign: "right",
    height: "350px",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };

  const gmapCanvasStyle = {
    overflow: "hidden",
    background: "none",
    height: "350px",
    width: "100%",
  };

  return (
    <>
      {/* OUR VALUES SECTION */}
      <section className="v-wrapper" id="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          <div className="v-left">
            <div className="image-container">
              <img src="./value.png" alt="Image" />
            </div>
          </div>
          <div className="flexColStart v-right">
            <span className="orangeText">Our Values</span>
            <span className="primaryText">Value we give to you</span>
            <span className="secondaryText">
              We are always ready to help you by providing the best services for
              you.
              <br />
              We believe a good place to live can make your life better.
            </span>
            <Accordion
              allowMultipleExpanded={false}
              preExpanded={[0]}
              className="accordion"
            >
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
                              <span className="primaryText">
                                {item.heading}
                              </span>
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

      {/* CONTACT SECTION */}
      <section className="c-wrapper" id="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
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
                      <span className="secondaryText">Ahemdabad</span>
                    </div>
                  </div>
                  <div className="flexCenter button">
                    <a href="#footer">Know Address</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="c-right">
            <div className="image-container">
              <img src="./contact.jpg" alt="Image" />
            </div>
          </div>
        </div>

        <div className="paddings innerWidth flexCenter m-container">
          <div className="mapouter" style={mapouterStyle}>
            <div className="gmap_canvas" style={gmapCanvasStyle}>
              <iframe
                width="100%"
                height="350"
                src={activeMapUrl}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          <div className="office-row">
            {locations.map((loc, index) => (
              <div className="offices" key={index}>
                <div className="address">
                  <span className="pt">{loc.label}:</span> {loc.address}
                </div>
                <div
                  className="map-btn"
                  onClick={() => setActiveMapUrl(loc.mapUrl)}
                  style={{ cursor: "pointer" }}
                >
                  See on Map
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
          <div className="flexColCenter inner-container">
            <span className="primaryText">Get Your Dream Place</span>
            <span className="secondaryText" style={{ maxWidth: "600px" }}>
              Take the first step toward a better living experience and find the
              perfect residence that truly feels like home.
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

import React from "react";
import Slider from "react-slick";
import { H1, H2, H3 } from "../Helper/headings";
import { P2 } from "../Helper/paragraphs";
import "../Styles/component.css";
const ContactSlider = () => {
  const places = [
    {
      city: "Greenwich",
      address: "312 SW Greenwich Dr Missouri 64082",
    },
    // {
    //   city: "Dubai",
    //   address: "5F1, 2nd Floor, Block 3, Gulshan-E-Iqbal, Karachi",
    // },
    // {
    //   city: "Abu Dhabi",
    //   address: "5F1, 2nd Floor, Block 3, Gulshan-E-Iqbal, Karachi",
    // },
    // {
    //   city: "Manama",
    //   address: "5F1, 2nd Floor, Block 3, Gulshan-E-Iqbal, Karachi",
    // },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };
  return (
    <div
      style={{
        width: "50%",
        display: "inline-block",
      }}
    >
      <Slider
        style={
          {
            // marginTop: "60px",
          }
        }
        className="contact-slider"
        {...settings}
      >
        {places.map((place, index) => {
          return (
            <div key={index} className="contact_slide main-section">
              <H3 text={place.city} color="#ffffff" />
              <P2 text={place.address} color="#ffffff" />
              <img
                src={require(`../Assets/contact_slider1.png`)}
                alt="contact cities"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ContactSlider;

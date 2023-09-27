import React from "react";
import Slider from "react-slick";
import { H1, H2 } from "../Helper/headings";
const FeaturedSlider = () => {
  const clients = [
    "legend.png",
    "waste.png",
    "teemates.png",
    "nurse.webp",
    "kinder.png",
    "saudi_bell.png",
    "san_university.png",
    "save_win.png",
    "al_husaani.png",
    "nde.webp",
    "stock_ship.png",
    "soundly.png",
    "legend.png",
    "waste.png",
    "teemates.png",
    "nurse.webp",
    "kinder.png",
    "saudi_bell.png",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    // centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="main-section featured-section">
      <H2 text={"We’re Featured In"} dataText="Featured" center={true} color={"#000"}/>
      <Slider
        style={{
          marginTop: "60px",
        }}
        className="featured-slider"
        {...settings}
      >
        {clients?.map((image, index) => {
          return (
            <div className="card-animation">
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
                src={require(`../Assets/${image}`)}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default FeaturedSlider;

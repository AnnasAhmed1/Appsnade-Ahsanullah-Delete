import React, { useState } from "react";
import Slider from "react-slick";
import ColoredHeading from "../Colored_heading";
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import WestSharpIcon from "@mui/icons-material/WestSharp";
import EastSharpIcon from "@mui/icons-material/EastSharp";
const HomeSilder = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const silderContentArr = [
    {
      text: "Development Services",
      coloredText: "Full-Fledged Mobile App",
      subText:
        "To help businesses reach their full potential, we as a mobile app development company endeavor to provide cutting-edge application development services.",

      reverse: true,
    },
    {
      text: "A Mobile App Development Company",
      coloredText: "With Global Presence",
      subText:
        "We are a mobile app development company constantly developing and producing digital solutions for app development companies around the world.",
    },
    {
      text: "A Mobile App Development Company Ready For The Future",
      coloredText: "With Our Innovative Approach",
      subText:
        "We as a mobile app development company use revolutionary innovations, including devices and AI, to set industry standards and transform lives.",
    },
  ];
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <p
        className={"arrows next-arrow"}
        style={{ ...style, display: "inline-block/" }}
        onClick={onClick}
      >
        <EastSharpIcon />
      </p>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <p
        className={"arrows prev-arrow"}
        style={{ ...style, display: "inline-block/" }}
        onClick={onClick}
      >
        <WestSharpIcon />0{activeSlide + 1}
      </p>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    afterChange: (currentSlide) => {
      setActiveSlide(currentSlide);
    },

    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            left: "0px",
            bottom: "10px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  const SliderContent = ({ text, coloredText, subText, reverse = false }) => {
    return (
      <div className=" home-main-slider">
        {/* anns */}
        <ColoredHeading
          text={text}
          coloredText={coloredText}
          reverse={reverse}
          dataText={"Experience"}
        />
        <p style={{ color: "#fff" }}>{subText}</p>
      </div>
    );
  };
  return (
    <div>
      <Slider {...settings}>
        {silderContentArr.map((content, index) => {
          return (
            // <p>annas</p>
            <SliderContent
              text={content.text}
              coloredText={content.coloredText}
              subText={content.subText}
              reverse={content.reverse ? content.reverse : false}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeSilder;

import React from "react";
import Slider from "react-slick";
import { H1, H2, H4 } from "../Helper/headings";
import { P2 } from "../Helper/paragraphs";
const ReferralSlider = () => {
  const referrals = [
    {
      image: "",
      title: "Anyone Can Be A Referral Partner",
      details:
        "Anyone can become our partner. From college students to people who are business tycoons, our referral program is an open opportunity for everyone. This is perhaps one of the most lucrative side hustles you can opt for in today’s times, so don’t miss out on it.",
    },
    {
      image: "",
      title: "Wide Range Of Services",
      details:
        "In addition to app development we also offer game development, wearable app development, website development, startup prototyping and much more.",
    },
    {
      image: "",
      title: "Conversions Support",
      details:
        "Want to get started but don’t know how to get conversions? Don’t worry, our account managers will guide you throughout the referral program on everything from the bringing in conversions to the best marketing strategies.",
    },
    {
      image: "",
      title: "Starred Referral Partners",
      details:
        "If you manage to bring in a consistent stream of conversions, we will offer you unbelievable incentives in the form of higher commissions, dedicated support and much more.",
    },
    {
      image: "",
      title: "Instant Commissions",
      details:
        "Appswaves’s app development services are among the best in the industry, resulting in higher chances of conversions. This will help you get conversions at a much more rapid rate and once we close the deal, we will pay your commissions immediately. Up to 25% in commissions from a single app project can help you generate thousands of dollars in revenue.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1500,
    // centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider
      style={{
        marginTop: "60px",
      }}
      className="featured-slider"
      {...settings}
    >
      {referrals?.map((referral, index) => {
        return (
          <div className="referral_slider_card">
            <img
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              src={require(`../Assets/referral_slide${index + 1}.png`)}
              alt=""
            />
            <H4 color="#14ffff" text={referral.title} />
            <P2  color="#fff" text={referral.details} />
          </div>
        );
      })}
    </Slider>
  );
};

export default ReferralSlider;

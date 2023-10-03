import React, { useEffect, useRef } from "react";
import { H1, H2, H3, H4 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import "../../Styles/service.css";
import ServiceCard from "../../Components/Services/ServiceCard";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Layout from "../../Layout";
import ButtonComp from "../../Helper/button_comp";
import axios from "axios";
import OurClients from "../../Components/OurClients";
import FeaturedSlider from "../../Components/FeaturedSlider";
import { useLocation, useParams } from "react-router-dom";
import GradeSharpIcon from "@mui/icons-material/GradeSharp";
import AwardsSlider from "../../Components/Home/AwardsSlider";
import TopicsCard from "../../Components/TopicsCard";
import "../../Styles/press.css";

const Press = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Appswaves ${location.pathname.replace("/", "")}`;
  }, [location]);
  const topics = [
    { title: "Node.js", details: "How to Hire the Right Node.js Developer?" },
    {
      title: "ZAWYA",
      details: "Appswaves resumes its journey of revolution in MENA",
    },
    {
      title: "BUSINESS.COM",
      details: `"If they say they can do everything, it is a bad sign..." Abeer talks about red flags to watch out for when freelancing.`,
    },
    {
      title: "TWITTER",
      details:
        'Featured on the "Top Game Development Companies In the Industry"',
    },
    {
      title: "GOOD FIRMS",
      details: 'Featured on the "List of Top Companies for Game Development"',
    },
    {
      title: "FORBES",
      details: "Appswaves addresses five unique ways to attract investors",
    },
    {
      title: "FORBES",
      details: "Abeer helps new entreprenurs overcome their concerns",
    },
    {
      title: "FXDAILYREPORT",
      details: "Evalution strategies by successful entrepreneurs",
    },
    {
      title: "GOOD FIRMS",
      details:
        "The groundbreaking role of mobile app development in the VR market",
    },
    {
      title: "THRIVEGLOBAL",
      details: "Tips to rebalance your mind and move ahead",
    },
    {
      title: "EINPRESSWIRE",
      details: `Featured as one of the "Top Custom Software Development Companies in the USA"`,
    },
    {
      title: "TOP DEVELOPERS",
      details: `Interview with Co-founder and CTO of Appswaves - Asim Rais Siddiqui`,
    },

    {
      title: "FORBES",
      details: `Our leaders talk about how to keep your cool during company crisis`,
    },
    {
      title: "BUSINESS.COM",
      details: `Pick the online meeting software that works best for your firm`,
    },
    {
      title: "FORBES",
      details: `Attract consumers by providing the information they want`,
    },
    {
      title: "CMSWIRE",
      details: `"A fractional CTO can add more value strategically..." - Asim Rais Siddiqui`,
    },
    {
      title: "THE NEXT WEB",
      details: `AI technologies are spreading at a rapid pace into a variety of businesses & job types`,
    },
    {
      title: "FORBES",
      details: `"The goal is to change the way people think about your brand and its values." - Abeer Raza`,
    },
    {
      title: "GOOD FIRMS",
      details: `"Appswaves LLC is a Silicon Valley startup" - Asim Rais Siddiqui Interviewed by GoodFirms`,
    },
    {
      title: "FORBES",
      details: `IoT Growth and Security - predictions from industry leaders`,
    },
  ];
  return (
    <Layout>
      <main className="services-main-container">
        <div className="container">
          <section className="consultation-section">
            <div>
              <H1 text={"OUR PUBLICATIONS"} dataText="Publications" />
              <P1
                text={
                  "We share our expertise in software development services, including web, mobile, design, and DevOps, with various platforms."
                }
                color={"#14ffff"}
              />
              <ul className="helper-p1">
                <li> Press Releases</li>
                <li> Features</li>
                <li> Awards</li>
                <li> News</li>
              </ul>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/press_head.png")}
                alt=""
              />
            </div>
          </section>
          <section className="popular-topics main-section">
            <H2 text={"Popular Topics"} dataText={"Popular Topics"} />
            <div>
              {topics?.map((topic, index) => {
                return (
                  <TopicsCard
                    key={index}
                    title={topic.title}
                    details={topic.details}
                  />
                );
              })}
            </div>
          </section>
          <FeaturedSlider />
        </div>
      </main>
      {/* <OurClients
        imagesArr={[
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
        ]}
      /> */}
    </Layout>
  );
};

export default Press;

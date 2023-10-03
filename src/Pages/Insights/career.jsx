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

const Careers = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Appswaves ${location.pathname.replace("/", "")}`;
  }, [location]);
  const insightname = "Careers";

  return (
    <Layout>
      <main className="services-main-container">
        <div className="container">
          <section className="consultation-section">
            <div>
              <div
                style={{
                  marginBottom: "80px",
                }}
              >
                <li>Home</li>
                <EastSharpIcon />
                <li
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {insightname}
                </li>
              </div>
              <H1 text={"Your Job Hunt Ends Here!"} />
              <P1
                text={
                  "Become a part of a global team of curious development enthusiasts and consultants building the best digital products for startups and enterprises."
                }
                color={"#14ffff"}
              />
              <ul className="helper-p1">
                <li>Opportunity</li>
                <li>Growth</li>
                <li>Diversity</li>
                <li>Collaboration</li>
              </ul>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/career_head_img.png")}
                alt=""
              />
            </div>
          </section>
          <FeaturedSlider />
        </div>
        <div
          style={{
            backgroundColor: "#f8f8fb",
          }}
          className=""
        >
          <section
            style={{
              zIndex: "2",
            }}
            className="container main-section"
          >
            <H2 text={"Come Join Us!"} dataText="Apply Now" />
            <H4 text={"Current Openings - 00"} />
          </section>
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

export default Careers;

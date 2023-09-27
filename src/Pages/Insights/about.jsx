import React, { useRef } from "react";
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
import { useParams } from "react-router-dom";
import GradeSharpIcon from "@mui/icons-material/GradeSharp";
import AwardsSlider from "../../Components/Home/AwardsSlider";

const About = () => {
  const insightname = "About";

  return (
    <Layout>
      <main className="services-main-container" style={{}}>
        <div className="container">
          <section className="consultation-section">
            <div>
              <div
                style={{
                  marginBottom: "80px",
                  color: "#14ffff",
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
              <H1
                color={"#14ffff"}
                text={`${insightname?.replace(/-/g, " ")} Appswaves`}
                dataText="Who We Are"
              />
              <P1
                text={
                  "Our unwavering commitment to innovation and customer satisfaction drives us to deliver transformative services that effectively address the ever-evolving demands of businesses in the digital world, ensuring exceptional results and driving impactful transformations."
                }
                color={"#ffff"}
              />
              <ul className="helper-p1" style={{ color: "#fff" }}>
                <li> Tech Integrated Solutions</li>
                <li> Client Focused Approach</li>
                <li> Disruptive Innovation</li>
                <li> Digital Transformation Partner</li>
              </ul>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/about_head_img.png")}
                alt=""
              />
            </div>
          </section>
          <section className="consultation-section">
            <div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <H1 text="Mission" dataText="Mission" color="#14ffff" />
                <H1 text="Vision" dataText="Vision" color="#14ffff" />
                <H1 text="Values" dataText="Values" color="#14ffff" />
              </div>
              <H4
                color="#ffff"
                text={
                  "To be forever curious and impactful in revolutionizing technology for our partner"
                }
              />
              <P1
                color="#ffff"
                text={
                  "We aspire to create and deliver the best digital solutions for businesses wanting to acquire a competitive edge in the industry and serve their customers through robust digital channels."
                }
              />
              <P1
                color="#ffff"
                text={
                  "Appswaves aims to help startups and organizations recognize their potential and leverage optimum, highly customized solutions for business growth and ROI."
                }
              />
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/about_mission.png")}
                alt=""
              />
            </div>
          </section>
          <section className="main-section">
            <H1
              color="#14ffff"
              text={
                "In Pursuit Of Scaling The Digital Ecosystem Through Top-Tier Product Teams"
              }
              dataText="Our Story"
            />
            <H4 text={"Our Story"} color="#14ffff" />
            <P1
              color="#ffff"
              text={
                "Appswaves came into existence after two tech enthusiasts from different backgrounds joined forces to create something bound to become a difference-maker in the digital world."
              }
            />
            <P1
              color="#ffff"
              text={
                "The company started in 2018 as a mobile app development company but has since grown into a full-stack digital transformation organization offering enterprise software development and technical consultancy services for businesses worldwide."
              }
            />
          </section>
          {/* <section className="awards-section main-section">
            <div className="awards">
              <H2 text={"Awards & Recognitions"} dataText="Winning Awards" />
              <P1
                text={
                  "We thrive on accelerating the path to disruption and implementing agile methodology to build feature-rich, user-friendly mobile apps that end users love. Our user-centric, quality-driven, and future-oriented mobile app development services are the reason why we have bagged these notorious awards and recognitions."
                }
              />
              <ButtonComp text="Check Reviews" />
            </div>
            <div className="ratings">
              <p>65+ reviews on clutch</p>
              <h1>4.9</h1>
              <div>
                <GradeSharpIcon />
                <GradeSharpIcon />
                <GradeSharpIcon />
                <GradeSharpIcon />
                <GradeSharpIcon />
              </div>
            </div>
          </section> */}
          <AwardsSlider />
        </div>
        <div className="estimation-section">
          <section
            style={{
              gap: "40px",
            }}
            className=" main-section container"
          >
            <div
              style={
                {
                  // padding: "50px",
                }
              }
            >
              <img
                style={{
                  width: "85%",
                }}
                src={require("../../Assets/about_impact_img.webp")}
              />
            </div>
            <div>
              <H2 text={"Our Impact"} color="#ffffff" />
              <P1 text={"Impact 2023 & Beyond!"} color="#ffffff" />
              <P1
                text={
                  "Appswaves vows to continue serving the community with social welfare and CSR efforts for communal betterment and well-being.Our vision to impact 20 million lives through better employment and education opportunities and empowerment marches toward 2023, and we will aggressively pursue the future beyond."
                }
                color="#ffffff"
              />
            </div>
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

export default About;

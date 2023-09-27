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

const Life = () => {
  const insightname = "Life at Appswaves";

  return (
    <Layout>
      <main className="services-main-container" style={{}}>
        <div className="container">
          <section className="consultation-section">
            <div style={{ color: "#14ffff" }}>
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
              <H1
                text={"Living & Working From Anywhere"}
                dataText="Job Hunt"
                color={"#14ffff"}
              />
              <P1
                text={
                  "At Appswaves, we foster a culture of inclusivity and collaboration, bringing together passionate technology enthusiasts who strive to drive innovation and unlock their full potential. Our team is dedicated to working together to achieve our goals, pushing the boundaries of what's possible."
                }
                color={"#ffff"}
              />
              <ul className="helper-p1" style={{ color: "#fff" }}>
                <li> Inclusive Team Culture</li>
                <li> Dynamic Work Environment</li>
                <li> Technology Enthusiasts</li>
                <li> Collaborative Teams</li>
              </ul>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/amj.png")}
                alt=""
              />
            </div>
          </section>
        </div>
        <div className="estimation-section">
          <section
            style={{
              gap: "40px",
            }}
            className=" main-section container"
          >
            <H2
              text={"Opportunities For Growth & Development"}
              color="#ffffff"
              dataText="Opportunities"
            />
            <div>
              <P1
                text={
                  "We are a team of lifelong learners passionate about technology and innovation. At Appswaves, we believe hard work and dedication should be recognized and rewarded, which is why we have employed a transparent, yet encouraging that emphasizes attitude, performance, and results."
                }
                color="#ffffff"
              />
              <P1
                text={
                  "As a member of Appswaves, you'll have the opportunity to make positive impacts through your work and be recognized for your contributions."
                }
                color="#ffffff"
              />
              <P1
                text={
                  "We offer competitive salary packages, bi-annual performance-based increments, a comprehensive healthcare plan, provident fund facilities with matching contributions, paid time off and holidays, professional development opportunities like training and conferences, employee referral bonuses, employee assistance programs for mental health and well-being, and more!"
                }
                color="#ffffff"
              />
            </div>
          </section>
        </div>

        <div
          style={{
            backgroundColor: "transparent",
          }}
          className="estimation-section"
        >
          <section
            style={{
              gap: "40px",
            }}
            className=" main-section container"
          >
            <div>
              <H2
                text={"Corporate Social Responsibility For The Greater Good"}
                dataText="Corporate"
              />
              <P1
                text={
                  "We are guided by a strong sense of purpose and a commitment to positively impacting the world. That's why we are dedicated to corporate social responsibility and strive to create sustainable, future-ready solutions that benefit our clients and the community."
                }
              />
              <P1
                text={
                  "Whether donating to orphanages and nursing homes, conducting routine visits to charity organizations, organizing and facilitating workshops for the learning and development of our people, or partnering with universities to provide internship opportunities leading to permanent employment, you will find Appswaves at the forefront."
                }
              />
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/corporate_img.webp")}
                alt=""
              />
            </div>
          </section>
        </div>
        <div className="estimation-section">
          <section className=" main-section container">
            <div>
              <H2
                text={"The Right Work-Life Balance"}
                color="#ffffff"
                dataText="Life Balance"
              />
              <P1
                text={
                  "We know that work isn't the only thing that matters. That's why we strive to create a positive, supportive culture that values diversity and work-life balance. We offer flexible scheduling, remote work options, and a variety of company-sponsored events and activities."
                }
                color="#ffffff"
              />
              <P1
                text={
                  "We believe that great things happen when talented people come together and collaborate. If you're excited about making a real impact through technology, we invite you to apply and become a part of the Appswaves family!"
                }
                color="#ffffff"
              />
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/life_balance.webp")}
                alt=""
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

export default Life;

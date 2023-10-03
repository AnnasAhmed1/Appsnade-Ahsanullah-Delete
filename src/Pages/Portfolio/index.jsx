import React, { useEffect, useRef } from "react";
import { H1, H2 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import "../../Styles/service.css";
import ServiceCard from "../../Components/Services/ServiceCard";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Layout from "../../Layout";
import ButtonComp from "../../Helper/button_comp";
import axios from "axios";
import OurClients from "../../Components/OurClients";
import FeaturedSlider from "../../Components/FeaturedSlider";
import LocationCard from "../../Components/Location/LocationCard";
import { useLocation, useNavigate } from "react-router-dom";
import { H4 } from "../../Helper/headings";

const Portfolio = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Appswaves ${location.pathname.replace("/", "")}`;
  }, [location]);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("formsubmit");
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/e9fcbac4-660b-4b51-8993-168237931e1c",
        {
          mainRoute: "services",
          subRoute: "no_subroute",
          fullName,
          email,
          number,
          description,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const primaryService = [
    {
      title: "Florida",
      description: "App developer in Florida",
      description2: "Software-Development-Florida",
    },

    {
      title: "San Francisco",
      description: "App developer in Florida",
      description2: "Software-Development-Florida",
    },

    {
      title: "Washington DC",
      description: "App developer in Florida",
      description2: "Software-Development-Florida",
    },
    {
      title: "Los Angeles",
      description: "App developer in Florida",
      description2: "Software-Development-Florida",
    },

    {
      title: "New York",
      description: "App developer in Florida",
      description2: "Software-Development-Florida",
    },

    {
      title: "Chicago",
      description: "App developer in Florida",
      description2: "Software-Development-Florida",
    },
    {
      title: "Miami",
      description: "App developer in Florida",
      description2: "Software-Development-Florida",
    },

    {
      title: "New Jersey",
      description: "App developer in Florida",
      description2: "Software-Development-Florida",
    },
  ];

  let fullName = "";
  let email = "";
  let number = "";
  let description = "";

  return (
    <Layout>
      <main className="services-main-container container" style={{}}>
        <section className="consultation-section">
          <div>
            <div style={{ color: "#14ffff" }}>
              <li>Home</li>
              <EastSharpIcon />
              <li>Projects</li>
            </div>
            <H1
              color={"#14ffff"}
              text={"Passion-Fueled Innovation: Where Dreams Become Reality"}
            />
            <P1
              text={
                "Appswaves, is not just a service provider; we are an invaluable extension of your marketing team, bringing a powerful combination of strategic thinking, expertise, and flawless execution to the areas where you need it the most.   "
              }
              color={"#ffff"}
            />
            <ul className="helper-p1" style={{ color: "#fff" }}>
              <li>Strategic Planning</li>
              <li>Cutting-Edge Technologies</li>
              <li>Unconventional App Experience</li>
              <li>Creative Solutions</li>
            </ul>
          </div>
          <div>
            <form ref={formRef} onSubmit={handleSubmit} action="">
              <h2 className="helper-h2">
                Book A Free<span> Consultation</span>
              </h2>
              <input
                onChange={(e) => {
                  fullName = e.target.value;
                }}
                required
                placeholder="Full Name"
              ></input>
              <input
                onChange={(e) => {
                  email = e.target.value;
                }}
                required
                placeholder="Email"
              />
              <input
                onChange={(e) => {
                  number = e.target.value;
                }}
                required
                placeholder="Number"
              />
              <input
                onChange={(e) => {
                  description = e.target.value;
                }}
                required
                placeholder="Describe Your Project Need"
              />
              <p>
                <input
                  type="checkbox"
                  id="demoCheckbox"
                  name="checkbox"
                  value="1"
                />
                <label htmlFor="">Share Non Disclosure Agreement</label>
              </p>
              <ButtonComp text="Get in Touch" center={true} />
            </form>
          </div>
        </section>
        <FeaturedSlider />
      </main>
      {/* <OurClients /> */}
      <div style={{ padding: "50px" }}>
        <H1 text={"Case Study"} />
        <P1
          text={
            "Explore TekRevol's exceptional portfolio to witness their transformative work in action, encompassing groundbreaking web and mobile applications, bespoke software development, and captivating digital experiences that push the boundaries of technology and drive business success"
          }
        />
        <section className="consultation-section">
          <H1 text="Teemates" dataText="Teemates" />

          <div style={{ display: "flex" }}>
            <div>
              <P1
                text={
                  "TeeMates is a social media app for golfers where they can connect, network and share their golfing stories through TeeTimes with other buddies around the world.."
                }
              />
              <P1
                text={
                  "Appswaves aims to help startups and organizations recognize their potential and leverage optimum, highly customized solutions for business growth and ROI."
                }
              />
            </div>
            <div style={{ marginRight: "20px" }}>
              <img
                style={{
                  width: "80%",
                  height: "60%",
                }}
                src={require("../../Assets/socialImg.jpg")}
                alt=""
              />
            </div>

            <div>
              <P1
                text={
                  "Ether Legends is a play to earn collectible NFT - Blockchain Trading Card Game where players can earn trophies and claim rewards by winning matches!"
                }
              />
              <P1
                text={
                  "Appswaves aims to help startups and organizations recognize their potential and leverage optimum, highly customized solutions for business growth and ROI."
                }
              />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/Fitness Img.png")}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>

      <div style={{ padding: "50px" }}>
        <section className="consultation-section">
          <H1
            text="Stop Vaping Challenge App"
            dataText="Stop Vaping Challenge App"
          />

          <div style={{ display: "flex" }}>
            <div>
              <P1
                text={
                  "To minimize vaping, Stop Vaping was designed to be a digital solution for teens and young adults to cut down on nicotine intake and e-cigarettes, and reduce adverse health effects..."
                }
              />
            </div>
            <div style={{ marginRight: "20px" }}>
              <img
                style={{
                  width: "80%",
                  height: "60%",
                }}
                src={require("../../Assets/amj_mobiles.png")}
                alt=""
              />
            </div>

            <div>
              <P1
                text={
                  "HDE App is a one-stop digital auctions platform. It is a feature-packed mobile application with dedicated panels for creating appealing videos of products to intrigue the visitors into buying the product.!"
                }
              />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/Fitness Img.png")}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;

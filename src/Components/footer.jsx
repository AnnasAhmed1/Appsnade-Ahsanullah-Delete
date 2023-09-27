import React from "react";
import ButtonComp from "../Helper/button_comp";
import { P1 } from "../Helper/paragraphs";
import { H2 } from "../Helper/headings";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const servicesList = [
    "Custom Software Development",
    "Android App Development",
    "IPhone App Development",
    "Web Development",
    "Game Development",
    "Bluetooth App development",
    "Cloud based services Apps",
    "Robotics development",
    // "Startup App Development",
    // "Flutter App Development",
    // "Cross Platform App Development",
    // "React Native App Development",
  ];
  const solutionsList = [
    "Automotive App Development",
    "Healthcare App Development",
    "On-Demand App Development",
    "Ecommerce App Development",
    "Real Estate App Development",
    "Music App Development",
    "IT Staff Augmentation",
  ];
  const aboutList = [
    "About Appswaves",
    "Referral Program",
    "Blogs",
    "Press",
    "Events",
  ];

  const locationList = [
    // "HOU",
    // "ATX",
    // "DTX",
    // "SF",
    // "MIA",
    // "CHI",
    // "NYC",
    // "DC",
    // "LA",
    // "DXB",
    // "QA",
    // "BH",
    // "KSA",
    "312 SW Greenwich Dr Missouri 64082",
  ];
  const navigate = useNavigate();

  return (
    <footer>
      <section className="container">
        <P1 text={"Have a Project To Discuss?"} color="#ffffff" center={true} />
        <H2 text={"We’re Ready!"} color="#ffffff" center={true} />
        <ButtonComp
          text="LET’S CONNECT!"
          center={true}
          onClick={() => {
            navigate("/contact");
          }}
        />
        <div>
          <div>
            <h4>Services</h4>
            <div className="grid-container">
              {servicesList.map((service, index) => {
                return (
                  <Link
                    className="grid-item"
                    key={index}
                    to={`/${service.replace(/ /g, "-")}`}
                  >
                    {service}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h4>Solutions</h4>
            <div className="grid-container">
              {solutionsList.map((solution, index) => {
                return (
                  <Link
                    className="grid-item"
                    key={index}
                    to={`/${solution.replace(/ /g, "-")}`}
                  >
                    {solution}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h4>About Us</h4>
            {aboutList.map((about, index) => {
              return (
                <Link
                  style={{
                    display: "block",
                  }}
                  className="grid-item"
                  key={index}
                  to={
                    about == "About Appswaves"
                      ? `/about`
                      : `/${about.replace(/ /g, "-")}`
                  }
                >
                  {about}
                </Link>
              );
            })}
          </div>
        </div>
        {/* <div style={{ marginTop: -100, }}>
          <h4>Payment geteway</h4>
        </div>
        <div style={{ marginTop: -180, }}>

        <a href="https://buy.stripe.com/test_eVa6sv6mMeiL1cAcMM" target="_blank" rel="noopener noreferrer"
          style={{ color: "blue", }}
        >
          Pay With Stripe
        </a>
        </div> */}
        <section className="location-section">
          <div>
            <h4>Location</h4>
            {/* <h1>1001 South{'\n'} Main Street STE{'\n'}4255 Kalispell,{'\n'} MT 59901</h1> */}
            <ul>
              {locationList.map((v, i) => {
                return <li>{v}</li>;
              })}
            </ul>
          </div>
          <div>
            <a href="https://www.facebook.com/people/Appswaves/100094578075186/">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/AppsWaves">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/appswaves/">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/appswaves/">
              <LinkedInIcon />
            </a>
          </div>
        </section>

        <section className="bottom-section">
          <p>© Appswaves 2023. All rights reserved</p>
          <div>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

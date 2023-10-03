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
import { useLocation } from "react-router-dom";

const AboutDetail = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Appswaves ${location.pathname.replace("/", "")}`;
  }, [location]);
  const formRef = useRef(null);

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
      <main className="services-main-container container">
        <section className="consultation-section">
          <div>
            <div>
              <li>Appswaves</li>
              <EastSharpIcon />
              <li>Location</li>
            </div>
            <H1 text={"Empowering Businesses Worldwide With Innovation"} />
            <P1
              text={
                "At Appswaves,  is a global technology and digital solutions provider that has built a strong presence across multiple continents. We have established ourselves as a leader in the industry by offering innovative digital products and services to clients."
              }
              color={"#14ffff"}
            />
            <ul className="helper-p1">
              <li>Global Technology Partner</li>
              <li>Strategic Office Locations</li>
              <li>Worldwide Digital Solutions</li>
              <li>Diverse Regional Footprint</li>
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
        <section className="primary-service-section main-section">
          <H2 text={"USA"} dataText="USA" />
          <div>
            {primaryService.map((service, index) => {
              return (
                <LocationCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  description2={service.description2}
                  route={"services"}
                />
              );
            })}
          </div>
        </section>
        {/* <section className="primary-service-section main-section">
          <H2 text={"Platforms"} dataText="Consulting" />
          <div>
            {consultingServices.map((service, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  route={"services"}
                />
              );
            })}
          </div>
        </section> */}
      </main>
      <OurClients />
    </Layout>
  );
};

export default AboutDetail;

import React, { useRef } from "react";
import { H1, H2 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import "../../Styles/service.css";
import ServiceCard from "../../Components/Services/ServiceCard";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Layout from "../../Layout";
import ButtonComp from "../../Helper/button_comp";
import axios from "axios";
import FeaturedSlider from "../../Components/FeaturedSlider";
import OurClients from "../../Components/OurClients";

const Solutions = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    console.log("formsubmit");
    e.preventDefault();

    axios
      .post(
        "https://sheet.best/api/sheets/e9fcbac4-660b-4b51-8993-168237931e1c",
        {
          mainRoute: "solution",
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

  const products = [
    {
      title: "CMS",
      description:
        " Appswaves is capable of providing tailored CMS solutions that integrate a user-friendly interface and advanced features",
    },

    {
      title: "HRM",
      description:
        " Build a custom HRM solution for your business and skyrocket your teams’ workflows.",
    },

    {
      title: "CRM",
      description:
        " Work with the best CRM development company for development, execution, migration and support",
    },

    {
      title: "ERP",
      description:
        " Appswaves provides ERP software development services that offer end-to-end ERP development",
    },

    {
      title: "LMS",
      description:
        " Acquire your easy-to-use, custom, and scalable learning management solution that offers exceptional learning experiences",
    },

    {
      title: "POS",
      description:
        " We are a POS development company specializing in creating tailored product solutions",
    },
  ];
  const industries = [
    {
      title: "Healthcare",
      description:
        " Transform your healthcare business with Appswaves's customized healthcare solutions",
    },

    {
      title: "Educational",
      description:
        " Appswaves builds custom learning management software for enterprises and institutions",
    },

    {
      title: "Fintech",
      description:
        " Appswaves is a custom Fintech software development company that builds digital banking and investment applications",
    },

    {
      title: "Logistics",
      description:
        " Appswaves creates logistic software for businesses to manage warehousing, storage, and streamline logistic operations",
    },

    {
      title: "Retail",
      description:
        " Appswaves offers advanced retail software solutions to improve user experience and increase sales",
    },

    {
      title: "Ecommerce",
      description:
        " Gain 10X conversions through digitalizing your businesses with our custom Ecommerce application development",
    },

    {
      title: "IT staff augmentation",
      description:
        " Ensure Your Project's Success Through Our IT Staff Augmentation Services",
    },

    {
      title: "Music",
      description:
        " Appswaves is a prime music app development company, helping clients worldwide",
    },

    {
      title: "On-demand",
      description:
        " Appswaves is an expert on-demand delivery app development company that has served multiple startups and entrepreneurs",
    },

    {
      title: "Automotive",
      description:
        " From car leasing service providers to auto e-commerce inventory solutions, leverage our readily available platforms",
    },

    {
      title: "Real Estate",
      description:
        " We are a full-scale real estate app development company that helps real estate companies to build custom real estate apps.",
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
              <li>Appswaves</li>
              <EastSharpIcon />
              <li>Solutions</li>
            </div>
            <H1
              text={"Innovative Solutions That Catalyze Transformation"}
              color={"#14ffff"}
            />
            <P1
              text={
                "We are dedicated to delivering transformative software and app development solutions that evolve and adapt to meet the unique requirements of our clients, propelling their digital evolution and catalyzing profound transformations."
              }
              color={"#ffff"}
            />
            <ul className="helper-p1" style={{ color: "#fff" }}>
              <li>User-Centered Design</li>
              <li>Scalability and Flexibility</li>
              <li>Security and Privacy</li>
              <li>Innovation and Optimization</li>
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
          <H2 text={"Products"} dataText="Products" color={"#14ffff"} />
          <div>
            {products.map((service, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  route={"solutions"}
                />
              );
            })}
          </div>
        </section>
        <section className="primary-service-section main-section">
          <H2 text={"Industries"} dataText="Industries" color={"#14ffff"} />
          <div>
            {industries.map((service, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  route={"solutions"}
                />
              );
            })}
          </div>
        </section>
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

export default Solutions;

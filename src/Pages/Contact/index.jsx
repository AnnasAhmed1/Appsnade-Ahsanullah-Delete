import React, { useRef } from "react";
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
import ContactSlider from "../../Components/ContactSlider";
import GradientButton from "../../Helper/GradientButton";
const Contact = () => {
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

  let fullName = "";
  let email = "";
  let number = "";
  let description = "";
  return (
    // <Layout footer={false}>
    <main className="contact-main">
      <section className="consultation-section/">
        {/* <p>annas</p> */}
        <ContactSlider />
        <div
          style={{
            width: "50%",
            display: "inline-block",
          }}
          className="main-section/"
        >
          <form ref={formRef} onSubmit={handleSubmit} action="">
            <h2 className="helper-h2">Let's talk about your project</h2>
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
              placeholder="Phone Number"
            />
            <textarea
              placeholder="Describe your project needs."
              onChange={(e) => (description = e.target.value)}
              name="project_need"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <GradientButton transparent={false} text="GET IN TOUCH" />
          </form>
        </div>
      </section>
    </main>
    // </Layout>
  );
};

export default Contact;

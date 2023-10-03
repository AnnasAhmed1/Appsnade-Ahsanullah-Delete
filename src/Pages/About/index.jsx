// import React, { useRef } from "react";
// import { H1, H2 } from "../../Helper/headings";
// import { P1 } from "../../Helper/paragraphs";
// import "../../Styles/service.css";
// import ServiceCard from "../../Components/Services/ServiceCard";
// import EastSharpIcon from "@mui/icons-material/EastSharp";
// import Layout from "../../Layout";
// import ButtonComp from "../../Helper/button_comp";
// import axios from "axios";
// import OurClients from "../../Components/OurClients";
// import FeaturedSlider from "../../Components/FeaturedSlider";
// import LocationCard from "../../Components/Location/LocationCard";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//   const formRef = useRef(null);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     console.log("formsubmit");
//     e.preventDefault();
//     axios
//       .post(
//         "https://sheet.best/api/sheets/e9fcbac4-660b-4b51-8993-168237931e1c",
//         {
//           mainRoute: "services",
//           subRoute: "no_subroute",
//           fullName,
//           email,
//           number,
//           description,
//         }
//       )
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const primaryService = [
//     {
//       title: "Florida",
//       description: "App developer in Florida",
//       description2: "Software-Development-Florida",
//     },

//     {
//       title: "San Francisco",
//       description: "App developer in Florida",
//       description2: "Software-Development-Florida",
//     },

//     {
//       title: "Washington DC",
//       description: "App developer in Florida",
//       description2: "Software-Development-Florida",
//     },
//     {
//       title: "Los Angeles",
//       description: "App developer in Florida",
//       description2: "Software-Development-Florida",
//     },

//     {
//       title: "New York",
//       description: "App developer in Florida",
//       description2: "Software-Development-Florida",
//     },

//     {
//       title: "Chicago",
//       description: "App developer in Florida",
//       description2: "Software-Development-Florida",
//     },
//     {
//       title: "Miami",
//       description: "App developer in Florida",
//       description2: "Software-Development-Florida",
//     },

//     {
//       title: "New Jersey",
//       description: "App developer in Florida",
//       description2: "Software-Development-Florida",
//     },
//   ];

//   let fullName = "";
//   let email = "";
//   let number = "";
//   let description = "";

//   return (
//     <Layout>
//       <main className="services-main-container container" style={{  }} >
//         <section className="consultation-section">
//           <div>
//             <div style={{ color: '#14ffff' }}>
//               <li>Appswaves</li>
//               <EastSharpIcon />
//               <li>About US</li>
//             </div>
//             <H1 text={"Empowering Businesses Worldwide With Innovation"} color={"#14ffff"} />
//             <P1
//               text={
//                 "At Appswaves,  is a global technology and digital solutions provider that has built a strong presence across multiple continents. We have established ourselves as a leader in the industry by offering innovative digital products and services to clients."
//               }
//               color={"#ffff"}
//             />
//             <ul className="helper-p1" style={{ color: '#fff' }}>
//               <li>Global Technology Partner</li>
//               <li>Strategic Office Locations</li>
//               <li>Worldwide Digital Solutions</li>
//               <li>Diverse Regional Footprint</li>
//             </ul>
//           </div>
//           <div>
//             <form ref={formRef} onSubmit={handleSubmit} action="">
//               <h2 className="helper-h2">
//                 Book A Free<span> Consultation</span>
//               </h2>
//               <input
//                 onChange={(e) => {
//                   fullName = e.target.value;
//                 }}
//                 required
//                 placeholder="Full Name"
//               ></input>
//               <input
//                 onChange={(e) => {
//                   email = e.target.value;
//                 }}
//                 required
//                 placeholder="Email"
//               />
//               <input
//                 onChange={(e) => {
//                   number = e.target.value;
//                 }}
//                 required
//                 placeholder="Number"
//               />
//               <input
//                 onChange={(e) => {
//                   description = e.target.value;
//                 }}
//                 required
//                 placeholder="Describe Your Project Need"
//               />
//               <p>
//                 <input
//                   type="checkbox"
//                   id="demoCheckbox"
//                   name="checkbox"
//                   value="1"
//                 />
//                 <label htmlFor="">Share Non Disclosure Agreement</label>
//               </p>
//               <ButtonComp text="Get in Touch" center={true} />
//             </form>
//           </div>
//         </section>
//         <FeaturedSlider />
//         <section className="primary-service-section main-section">
//           <H2 text={"USA"} dataText="USA" color={"#14ffff"} />
//           <div>
//             {primaryService.map((service, index) => {
//               return (
//                 <div
//                   onClick={() => {
//                     navigate(`/LocationDetail`);
//                   }}
//                 >
//                   <LocationCard
//                     key={index}
//                     title={service.title}
//                     description={service.description}
//                     description2={service.description2}
//                   // route={"Home"}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </main>
//       {/* <OurClients
//             imagesArr={[
//               "legend.png",
//               "waste.png",
//               "teemates.png",
//               "nurse.webp",
//               "kinder.png",
//               "saudi_bell.png",
//               "san_university.png",
//               "save_win.png",
//               "al_husaani.png",
//               "nde.webp",
//               "stock_ship.png",
//               "soundly.png",
//               "legend.png",
//               "waste.png",
//               "teemates.png",
//               "nurse.webp",
//               "kinder.png",
//               "saudi_bell.png",
//             ]}
//           />    */}
//     </Layout>
//   );
// };

// export default About;

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

const About = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Appswaves ${location.pathname.replace("/", "")}`;
  }, [location]);
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
                  backgroundColor: "#fff",
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

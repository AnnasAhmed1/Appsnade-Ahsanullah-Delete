import React from "react";
import Layout from "../../Layout";
import { H1, H4, H5 } from "../../Helper/headings";
import { P1, P2 } from "../../Helper/paragraphs";
import GradientButton from "../../Helper/GradientButton";
import "../../Styles/service_details.css";
import AdjustIcon from "@mui/icons-material/Adjust";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const SolutionDetails = () => {
  const { solutionname } = useParams();

  const handleSubmit = (e) => {
    console.log("formsubmit");
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/e9fcbac4-660b-4b51-8993-168237931e1c",
        {
          mainRoute: "services",
          subRoute: solutionname,
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
    <Layout gradientButton={true}>
      <main className="service-details-main">
        <section className="main-section consultation-section" style={{}}>
          <div className="consultation-container container">
            <div>
              <p
                style={{
                  marginBottom: "30px",
                  fontWeight: "600",
                  color: "#14ffff",
                }}
              >
                Home / Solutions /
                <span
                  style={{
                    color: "#ef5123",
                    textTransform: "capitalize",
                  }}
                >
                  {" " + solutionname}
                </span>
              </p>
              <H1
                color={"#14ffff"}
                text={`${solutionname?.replace(/-/g, " ")} Company`}
              />
              <P2
                color={"#fff"}
                text={
                  "Your search for the best android app development company ends here because Appswaves has a team of experienced android app developers and business specialists ready to help you with your app idea."
                }
              />
              <P2
                color={"#ffff"}
                text={
                  "Over the years, we’ve developed several custom android apps and helped clients globally by bringing their android app ideas to life."
                }
              />
              <GradientButton
                text="Build Your Android App"
                transparent={false}
              />
              <div className="feature-image-container">
                <H4 text={"Featured In:"} color={"#14ffff"} />
                <div>
                  <img src={require("../../Assets/Fitness Img.png")} alt="" />
                  <img src={require("../../Assets/tnw.png")} alt="" />
                  <img src={require("../../Assets/tnw.png")} alt="" />
                  <img src={require("../../Assets/tnw.png")} alt="" />
                  <img src={require("../../Assets/tnw.png")} alt="" />
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} action="">
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
                  placeholder="Phone Number"
                />
                <input
                  onChange={(e) => {
                    description = e.target.value;
                  }}
                  required
                  placeholder="Description"
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
                <button className="square-button">Let's Connect</button>
              </form>
            </div>
          </div>
          <div className="featured-container main-section">
            <div className="container">
              <div>
                <h1>300 +</h1>
                <p>
                  <img src={require("../../Assets/app_developed.png")} alt="" />
                  Apps Developed
                </p>
              </div>
              <div>
                <h1>65 +</h1>
                <p>
                  <img src={require("../../Assets/app_developed.png")} alt="" />
                  Clutch Review
                </p>
              </div>
              <div>
                <h1>35 +</h1>
                <p>
                  <img src={require("../../Assets/app_developed.png")} alt="" />
                  Industries Served
                </p>
              </div>
            </div>
            <button className="white-button">Lets Work Together</button>
          </div>
        </section>
        <section className="digital-expertise main-section">
          <div className="container">
            <div>
              <P1 text={"OUR DIGITAL EXPERTISE"} color={"#ef5123"} />
              <h2
                style={{
                  color: "#fff",
                }}
                className="heading"
              >
                Top Android App Development Services to bring Your Vision to
                Life
              </h2>
              <P2
                text={
                  "As a full-fledged android app development company, we enable ambitious entrepreneurs and business owners to convert their app ideas into a feature-rich android app, providing a dedicated platform to their target audience."
                }
                color={"#ffffff"}
              />
              <P2
                text={
                  "Whether you need to optimize your existing android app by fixing the loopholes or build an android app from scratch, our android app development services guarantee to deliver a fail-proof, feature-rich application that could help you achieve exponential growth and scalability."
                }
                color={"#ffffff"}
              />
            </div>
            <div className="services-list">
              {[1, 2, 3].map((v, i) => {
                return (
                  <div>
                    <img
                      src={require("../../Assets/android_icon.png")}
                      alt=""
                    />
                    <h2>0{v}</h2>
                    <H5
                      text={"App Development Consultation"}
                      color={"#ffffff"}
                    />
                    <P2
                      text={
                        "Our android app development service start with a detailed consultation between our in-house android app development teams and stakeholders. We provide a complete roadmap to our android app development framework, including the development cost, process, and tech stack."
                      }
                      color={"#ffffff"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="container">
          <section className="main-section">
            <P1 text={"OUR CASE STUDIES"} color={"#ef5123"} />
            <h2
              style={{
                color: "#000",
              }}
              className="heading"
            >
              The Success Stories Crafted By Our
              <br />
              <span
                style={{
                  fontWeight: 300,
                }}
              >
                App Development Company
              </span>
            </h2>
            <P2
              text={
                "As a mobile app development company , we’ve met with several entrepreneurs and discussed our passion for blending technologies to develop highly intuitive and revolutionary solutions for their businesses and audiences. And we would love to have you look at some of them."
              }
            />
          </section>
          <section className="main-section usp-section">
            <div className="container1">
              <P1 text={"OUR USP"} color={"#ef5123"} />
              <h2 className="heading">
                Android Application Development Company that Builds Wow-Worthy
                Experiences
              </h2>
              <P2
                text={
                  "A core portion of our Android application development company revolves around building highly-personalized experiences for businesses across multiple industry verticals."
                }
              />
              <P2
                text={
                  "This enables us to create tailored android app development plans for industries that cater to the ultra-specific needs of the customers. With experience developing more than 1000 apps for different sectors, our Android app development team knows what needs to be done to create the right app for you."
                }
              />
              <GradientButton
                text="Build Your Industry Specific Android App"
                transparent={false}
              />
            </div>
            <div className="container2">
              <ul>
                <div>
                  <li>
                    <AdjustIcon />
                    Automotive
                  </li>
                  <li>
                    <AdjustIcon />
                    Healthcare
                  </li>
                  <li>
                    <AdjustIcon />
                    Ecommerce
                  </li>
                  <li>
                    <AdjustIcon />
                    On-Demand
                  </li>
                </div>
                <div>
                  <li>
                    <AdjustIcon />
                    Real Estate
                  </li>
                  <li>
                    <AdjustIcon />
                    Music
                  </li>
                  <li>
                    <AdjustIcon />
                    IT Staff
                  </li>
                </div>
              </ul>
            </div>
          </section>
        </div>
        <section className="why-section main-section">
          <div className="container">
            <div className="text-container">
              <P1
                text={"WHY CHOOSE OUR ANDROID APP DEVELOPMENT SERVICES?"}
                color={"#ffffff"}
              />
              <h2
                style={{
                  color: "#ffffff",
                }}
                className="heading"
              >
                Building Wow-Worthy Experiences through Custom Android App
                Development Service
              </h2>
              <P2
                text={
                  "Partnering up with an android application development company can help you reach a broader audience and go from local to global. With a feature-rich, user-friendly, and fully functional android app, you can completely transform your business and build a community of loyal customers that will promote your app via word-of-mouth marketing."
                }
                color={"#ffffff"}
              />
              <P2
                text={
                  "The future of Android app development is more than just about applications. The advent of technologies such as wearable devices and Smart TVs gives rise to a new era of digital product development. In short, it is revolutionizing the android app market by creating more demand for personalized applications from consumers."
                }
                color={"#ffffff"}
              />
              <h2
                style={{
                  color: "#ffffff",
                }}
                className="heading"
              >
                How Appswaves’s Android App Development Solutions can help you
                Scale
              </h2>
              <P2
                text={
                  "At Appswaves, we aim to push boundaries when delivering the best android app development services. Our end-to-end android app development solutions enable businesses from different walks of life, i.e., SMEs, Startups, and enterprise-grade organizations, to pivot to a whole new level, unleash their business’s true potential, and unlock new opportunities and revenue streams through custom android app development."
                }
                color={"#ffffff"}
              />
              <P2
                text={
                  "Our expert android app developers ensure your app’s compatibility with modern technologies related to android, i.e., wearable devices, android TVs, and tablets. But it’s not just this field that we are currently disrupting – we’re aiming for the moon by implementing a revolutionary approach as a part of our android app development process. Additionally, for businesses, mobile apps have created an avenue for better customer engagement, innovative marketing, personalization, data collection, and scaling in the target market."
                }
                color={"#ffffff"}
              />
              <button
                style={{
                  margin: "0",
                }}
                className="white-button"
              >
                Schedule A Free Consultation Session{" "}
              </button>
            </div>
          </div>
        </section>
        <section className="main-section end-service-section">
          <div className="container">
            <P1 text={"END-TO-END SERVICES"} color="#ef5123" center={true} />
            <h2
              style={{
                color: "#fff",
                textAlign: "center",
              }}
              className="heading"
            >
              Wide Spectrum of Custom Android App Development Service
            </h2>
            <div className="service-details-grid">
              {[1, 2, 3, 4].map((v, i) => {
                return (
                  <div>
                    <h4>Custom App Development</h4>
                    <p>
                      We provide custom android application development service
                      that leverage modern technology stack and data insights to
                      build unique and innovative android applications
                    </p>
                  </div>
                );
              })}
            </div>
            <GradientButton
              text="Connect With An Expert"
              transparent={false}
              center={true}
            />
          </div>
        </section>
        <section className="main-section solution-section">
          <div className="container">
            <div>
              <P1 text={"WHITE LABEL SOLUTIONS"} color="#ef5123" />
              <h2 className="heading">
                Full-Fledged Android App Development Services
              </h2>
              <P2
                text={
                  "As a global tech solutions provider, Appswaves is always looking for new initiatives to pave the way for enterprise businesses and enlist top-grade tech support and solutions to help them achieve exponential growth."
                }
              />
              <P2
                text={
                  "We have now started offering white label android app development services that any firm can leverage to gain incredible value from customizing our already existing SaaS solutions in various niches."
                }
              />
            </div>
            <div>
              <h3>
                Currently, we are offering White label solutions for the
                following sectors:
              </h3>
              <ul>
                <li>
                  <AdjustIcon />
                  Automotive Industry
                </li>
                <li>
                  <AdjustIcon />
                  AI-Voice Based Assistants
                </li>
                <li>
                  <AdjustIcon />
                  Streaming Industry
                </li>
                <li>
                  <AdjustIcon />
                  Reviews & Ratings Industry
                </li>
              </ul>
              <P2
                text={
                  "These solutions are ready to become customized solutions for any industry vertical. Low on cost, high on scalability, and based on the latest tech, these White label solutions can make your business gain additional revenue through this disruptive tech initiative."
                }
              />
            </div>
          </div>
        </section>
        <section className="main-section end-service-section">
          <div className="container">
            <P1 text={"CLIENT BENEFITS"} color="#ef5123" />
            <h2
              style={{
                color: "#fff",
                // textAlign: "center",
              }}
              className="heading"
            >
              Perks of Working with a Professional Android App Development
              Agency
            </h2>
            <P2
              color="#fff"
              text={
                "We treat our clients like a part of the Appswaves family and ensure their experience with us is hassle-free and transparent."
              }
            />
            <div className="service-details-grid">
              {[1, 2, 3, 4].map((v, i) => {
                return (
                  <div
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <P1 text={`0${i + 1}`} />
                    <h3>Post-Delivery Support and Maintenance</h3>
                    <P1
                      text="We provide custom android application development service
                      that leverage modern technology stack and data insights to
                      build unique and innovative android applications"
                    />
                  </div>
                );
              })}
            </div>
            <GradientButton
              text="Discuss your goals with us"
              transparent={false}
              center={true}
            />
          </div>
        </section>
        <section className="main-section build-section">
          <div className="container">
            <div className="text-container">
              <h2 className="heading">
                Do you want to take your business online with an android app
                that perfectly reflects your brand?
              </h2>
              <GradientButton text="Let’s Build Today" transparent={false} />
            </div>
            <img src={require("../../Assets/build.png")} alt="" />
          </div>
        </section>
        <section className="main-section get-in-section">
          <div className="container">
            <div>
              <p>
                <HorizontalRuleIcon />
                LET’S TALK
              </p>
              <h2
                style={{
                  color: "#fff",
                }}
                className="heading"
              >
                Got an idea?
                <br />
                Let’s get in touch!
              </h2>
              <P2
                text={
                  "Let’s discuss your project and find out what we can do to provide value."
                }
                color="#fff"
              />
            </div>
            <div className="form-container">
              <P2
                text={"I am interested in discussing my ideas with you for"}
                color="#fff"
              />
              <div>
                {/* <label for="cars">Choose a car:</label> */}
                <TextField
                  sx={{
                    flex: 1,
                  }}
                  id="standard-select-currency"
                  select
                  defaultValue="Select Project Type"
                  // helperText="Select Project Type"
                  variant="standard"
                >
                  {[
                    "Select Project Type",
                    " Website Design & Dev",
                    "UI/UX Design",
                    "Mobile App Design & Dev",
                    "Blockchain Project",
                  ].map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                {/* <select name="cars" id="cars">
                  <option value="">Website Design & Dev</option>
                  <option value="">UI/UX Design</option>
                  <option value="">Mobile App Design & Dev</option>
                  <option value="">Blockchain Project</option>
                </select> */}
                <TextField
                  sx={{
                    flex: 1,
                    marginTop: "-16px",
                  }}
                  id="standard-basic"
                  label="Your Full Name"
                  variant="standard"
                />
              </div>
              {/* <br /> */}
              <div>
                <TextField
                  id="standard-basic"
                  label="Your Email Address"
                  variant="standard"
                  sx={{
                    flex: 1,
                    color: "#fff",
                  }}
                />
                <TextField
                  sx={{
                    flex: 1,
                  }}
                  id="standard-basic"
                  label="Your Phone Number"
                  variant="standard"
                />
              </div>
              <button className="white-button">LET'S GET IN TOUCH</button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SolutionDetails;

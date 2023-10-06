import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GradientButton from "../../Helper/GradientButton";
import { H1 } from "../../Helper/headings";
import { P2 } from "../../Helper/paragraphs";
import Layout from "../../Layout";
import "../../Styles/service_details.css";

const ServiceDetails = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Appswaves ${location.pathname.replace("/", "")}`;
  }, [location]);
  let { servicename } = useParams();
  servicename = servicename.toLocaleLowerCase();
  const handleSubmit = (e) => {
    console.log("formsubmit");
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/e9fcbac4-660b-4b51-8993-168237931e1c",
        {
          mainRoute: "services",
          subRoute: servicename,
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
  const navigate = useNavigate();
  const service = servicename.split("-")[0];

  const seviceData = {
    "web-development": [
      {
        heading: "Best Web Development Company",
        text: [
          "We help our clients reach their company objectives by offering them top-notch web development services. Our team of skilled custom website developers at Appswaves is proficient in the newest frameworks and technologies.",
          "We use a detailed development process that includes planning, designing, developing, testing, and deployment. By following our clients' standards and requirements, we make sure they get the best results possible.",
        ],
      },
      {
        heading: "Web Development in the USA",
        text: [
          "With the help of bespoke website design and development services, establish an effective digital presence. Create a website that is attractive, responsive, and fully functioning to help your business soar.",
          "Appswaves is a leading custom website developer service provider in the USA that serves businesses and startups with client-centric web solutions. We as the best web development company prioritize providing the greatest coding, hosting, localization, UX, UI, coding, and a variety of other procedures to produce Web development in the USA services that are ready to go live.",
        ],
      },
      {
        heading:
          "Experience The Advantages – Your Best Web Development Company",
        text: [
          "With the help of bespoke website design and development services, establish an effective digital presence. Create a website that is attractive, responsive, and fully functioning to help your business soar.",
        ],

        subData: [
          {
            heading: "Agile Methodology for Development",
            text: [
              "To give our clients the most flexibility possible during the development process, our WordPress developer and custom website developer employ an agile development style. This entails constant collaboration with you as we gather requirements, deliver regular updates and demos, and incorporate your feedback into the development process.",
            ],
          },
          {
            heading: "An enthusiastic project manager",
            text: [
              "We assign a dedicated project manager to each of our clients who acts as a single point of contact throughout the development process. This guarantees that you receive clear communication, timely updates, and a seamless development experience.",
            ],
          },
          {
            heading: "Quality Control",
            text: [
              "Every solution we provide is rigorously tested to ensure that it satisfies our high standards for quality and dependability, and we have a dedicated team of quality assurance professionals. This guarantees that your solution is free of bugs, secure, and operates at its optimum performance.",
            ],
          },
          {
            heading: "Cost-Effective Solutions",
            text: [
              "We are aware that pricing is a crucial factor for businesses of all sizes. Because of this, we deliver solutions that are affordable and offer the highest return on your investment. We collaborate closely with you to create a solution that fits within your budget and produces the best results for your company.",
            ],
          },
        ],
      },
      {
        heading: "Projects from our best web development company",

        subData: [
          {
            heading: "Designing & Developing Websites in HTML5",
            text: [
              "By emphasizing scalability, loading speed, and responsiveness, our skilled HTML5 custom website developers provide and implement full solutions that precisely fit your corporate environment.",
              "End-to-end HTML5 solutions from Appswaves are essential for providing custom website development services, which may serve US business owners and entrepreneurs in all areas from design and development to strategy and consultancy.",
            ],
          },
          {
            heading: "Website design and development by a WordPress developer",
            text: [
              "Appswaves as the best web development company has unparalleled experience in designing and developing engaging, customized WordPress-based websites. Our WordPress developer guarantees scalable, high-performance, secure, and feature-rich digital products that assist companies in creating a strong brand presence.",
              "You have come to the right website if you are seeking top-notch web development in the USA. At every stage of your business's development, our expertise as custom website developers and WordPress developers may help you succeed.",
            ],
          },
          {
            heading: "Custom Website Development Services",
            text: [
              "We understand the demands imposed by businesses, with the help of custom website developers we customize our web solutions to meet their needs, resulting in completely personalized, secure websites that deliver results. Our innovative technologies assist companies in streamlining operations and promoting development.",
              "In addition to assisting with business difficulties unique to your sector, Appswaves has the knowledge and resources to ensure that your objectives are successfully attained.",
            ],
          },
          {
            heading: "Website Development Using Laravel",
            text: [
              "To design and create web-based products that adhere to best practices and industry standards, our skilled Laravel developers use robust development processes. Businesses get quicker outcomes using  Appswaves website  services.",
              "Our professionals are committed to offering clients scalable business solutions that help improve earnings, customer experience, and productivity through high-quality Laravel web development.",
            ],
          },
        ],
      },
      {
        heading: "Leading WordPress Development Services",

        subData: [
          {
            heading: "Make a WordPress website to promote your dream products",
            text: [
              `Appswaves, the best web development company, has consistently worked to offer innovative, custom solutions to its valued clients. We strive to uphold our WordPress developer goal "to meet every need" by offering cutting-edge website development services.`,
              "The skilled WordPress developers at Appswaves are available to provide top-notch website development services everywhere in the world. We are aware of the effectiveness of responsive websites. To improve your website's conversion rate, our WordPress developers offer responsive websites that adapt to mobile, tablet, and desktop sizes.",
              "Our WordPress developers are highly skilled in integrating WordPress with popular web integrations including responsive web design, quick extendable websites, richly equipped CRMs, and e-commerce capabilities.",
              "We assist a variety of content management systems, including custom-designed CMS, WordPress development services, Drupal development services, Joomla development services, and e-commerce development services, to create compelling content that attracts your target audience.",
            ],
          },
        ],
      },
      {
        heading:
          "We like to create highly functional and goal-oriented websites.",
        text: [
          "Our team of WordPress and custom website developers provides competent assistance that meets your business objectives and creates websites that speed up digital transformation.",
          "As the best web development company, we understand that the usability, accessibility, and fundamental aesthetics of your website directly affect the market success of your business. Therefore, as a WordPress developer and custom website developer, we make it a point to use the most recent web technologies to ensure that our services meet industry standards and generate the highest level of customer satisfaction.",
        ],
      },
    ],
    "it-consultancy": [
      {
        heading: "IT Consultancy Agency",
        text: [
          "IT consulting companies frequently offer guidance on important issues including mergers and acquisitions. They also provide advice on more specialized company topics like branding or pricing. IT consulting companies can support the development of a new product line or help to strengthen a company's marketing approach.",
        ],
      },
      {
        heading: "Information Technology (IT) Consulting Services",
        text: [
          "Appswaves are at the leading edge of technological advancement. We are more than just IT consultants because we are a top-tier IT consulting agency with a team that is deeply knowledgeable in technology. We work with you to create an IT roadmap that is prepared for the future. We take a customized strategy to make sure that your business not only adjusts but also thrives. We're here to improve your journey at every turn, from digitizing processes to optimizing your software portfolio to leveraging the potential of mobile solutions.",
        ],
      },
      {
        heading: "WE OFFER IT CONSULTING SERVICES",
        text: [
          "Join Appswaves on a revolutionary IT adventure. As an IT consulting firm, we don't simply offer advice; we also work with you to improve your software architecture and create a tech-focused digital strategy. Our software engineers and IT consultants provide a seamless digital transformation, from strategic planning to exact execution, by optimizing your software portfolio.",
        ],
      },
      {
        heading: "IT Consulting Services and Solutions for Business",
        text: [
          "Are you ready to turn your IT challenges to your advantage? Let's get started and have an exchange of ideas. The Managed Service Provider (MSP) Appswaves assists businesses in overcoming their most difficult technological problems.",
          "Your company may remain secure, effective, and profitable with the help of our advanced IT consulting services. We provide expert advice on the strategic technological path you must take to stay ahead of the technology curve—and your competition. We are a prominent IT Consulting company and one of the top 30 MSPs nationwide.",
        ],
      },
      {
        heading: "What kinds of IT consulting services does Appswaves provide?",
        text: [
          "You can choose from a wide range of IT consulting services at Appswaves. When you need expert support, our IT consultants  provide an immediate presence, a wealth of resources, and great understanding.",
          "The IT consultants at Appswaves assist you in keeping up with the rapidly changing IT world of today, from IT strategy to IT budgeting, from business continuity planning to cloud and data transfer services, and beyond.",
        ],
      },
      {
        heading: "Why Are IT Consulting Services Beneficial?",
        text: [
          "The main advantage of working with Appswaves IT consultants is that you get the knowledge without the cost. Without having to hire and manage this expertise yourself, as a presenting IT consulting company, you have direct access to a team of 350+ skilled technicians—24/7/365. As an IT consulting firm, we make sure that You have access to plenty of specialized expertise, tried-and-true best practices, and effective procedures, all of which are based on our tens of thousands of hours of experience working with numerous companies.",
          "That is the main advantage. However, there are eight additional advantages to hiring an IT consultant.",
        ],
      },
      {
        heading:
          "What Distinguishes IT Consulting Services from IT Consulting?",
        text: [
          "The distinction between strategy and implementation is the primary distinction between IT consulting and IT consulting services. You are instructed by an IT consultant as to what to do, why, and possibly even how. But that approach is carried out by an IT consulting services company.",
          "An IT consultant hands you a plan. An IT consulting services company carries out that plan.",
          "Your migration to the cloud is advised by an IT consultants. An IT consulting services firm carries out that migration.",
        ],
      },
      {
        heading:
          "IT Consulting Services that are Strategic Giving You a Competitive Advantage",
        text: [
          "One of the leading IT consulting companies, Appswaves offers specialized IT consultation services and BUSINESS IT SUPPORT to assist in resolving your IT problems. Utilizing highly efficient IT strategies is made possible by utilizing strategic IT consulting services.",
        ],
      },
    ],
  };

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
                Home / Services /
                <span
                  style={{
                    color: "#ef5123",
                    textTransform: "capitalize",
                  }}
                >
                  {" " + servicename}
                </span>
              </p>
              <H1 text={`${servicename?.replace(/-/g, " ")} Company`} />
              <P2
                // text={`Your search for the best ${service} app development company ends here because Appswaves has a team of experienced ${service} app developers and business specialists ready to help you with your app idea.`}
                text={`
            We help our clients reach their company objectives by offering them top-notch web development services. Our team of skilled custom website developers at Appswaves is proficient in the newest frameworks and technologies.
            `}
              />
              <P2
                text={
                  "We use a detailed development process that includes planning, designing, developing, testing, and deployment. By following our clients' standards and requirements, we make sure they get the best results possible."
                }
              />
              <GradientButton
                text={`Build Your ${service} App`}
                transparent={false}
                onClick={() => {
                  navigate("/contact");
                }}
              />
              {/* <div className="feature-image-container">
                <H4 text={"Featured In:"} />
                <div>
                  <img src={require("../../Assets/tnw.png")} alt="" />
                  <img src={require("../../Assets/tnw.png")} alt="" />
                  <img src={require("../../Assets/tnw.png")} alt="" />
                  <img src={require("../../Assets/tnw.png")} alt="" />
                  <img src={require("../../Assets/tnw.png")} alt="" />
                </div>
              </div> */}
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
                <button className="square-button">Let's Connect</button>
              </form>
            </div>
          </div>
        </section>
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
          <button
            className="white-button"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Lets Work Together
          </button>
        </div>
        {/* <section className="digital-expertise main-section">
          <div className="container">
            <div>
              <P1 text={"OUR DIGITAL EXPERTISE"} color={"#ef5123"} />
              <h2
                style={{
                  color: "#fff",
                }}
                className="heading"
              >
                Experience The Advantages - Your Best Web Development Company
              </h2>
              <P2
                text={`Appswaves are at the leading edge of technological advancement. We are more than just IT consultants because we are a top-tier IT consulting agency with a team that is deeply knowledgeable in technology. We work with you to create an IT roadmap that is prepared for the future. We take a customized strategy to make sure that your business not only adjusts but also thrives. We're here to improve your journey at every turn, from digitizing processes to optimizing your software portfolio to leveraging the potential of mobile solutions.              `}
              />
              <P2
                text={`Whether you need to optimize your existing ${service} app by fixing the loopholes or build an ${service} app from scratch, our ${service} app development services guarantee to deliver a fail-proof, feature-rich application that could help you achieve exponential growth and scalability.`}
              />
            </div>
            <div className="services-list">
              {[1, 2].map((v, i) => {
                return (
                  <div>
                    <img
                      src={require("../../Assets/android_icon.png")}
                      alt=""
                    />
                    <h2>0{v}</h2>
                    <H5
                      text={"IT Consulting Services and Solutions for Business"}
                    />
                    <P2
                      text={`Join Appswaves on a revolutionary IT adventure. As an IT consulting firm, we don't simply offer advice; we also work with you to improve your software architecture and create a tech-focused digital strategy. Our software engineers and IT consultants provide a seamless digital transformation, from strategic planning to exact execution, by optimizing your software portfolio.                      `}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section> */}
        <div className="main-section">
          {seviceData[servicename]?.map((data, index) => {
            return (
              <section
                className={`main-section/ ${
                  (index + 1) % 2 === 0 ? "pink-coloured-container/" : null
                }`}
              >
                <div className="container">
                  {/* <P1 text={"OUR CASE STUDIES"} color={"#ef5123"} /> */}
                  <h2
                    style={{
                      color: "#000",
                      textTransform: "capitalize",
                    }}
                    className="heading"
                  >
                    {data.heading}
                    <br />
                  </h2>
                  {data.text?.map((v, i) => {
                    return <P2 text={v} />;
                  })}
                  {data.subData?.map((obj, index) => {
                    return (
                      <>
                        <section className="main-section/">
                          <h3
                            style={{
                              color: "#000",
                              textTransform: "capitalize",
                              // paddingLeft: "10px",
                            }}
                            className="helper-h4 service-detail-sub-heading"
                          >
                            - {obj.heading}
                            <br />
                          </h3>
                          {obj.text?.map((v, i) => {
                            return <P2 text={v} />;
                          })}
                        </section>
                      </>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* <section className="main-section usp-section">
            <div className="container1">
              <P1 text={"OUR USP"} color={"#ef5123"} />
              <h2 className="heading">
                {service} Application Development Company that Builds Wow-Worthy
                Experiences
              </h2>
              <P2
                text={`The IT consultants at Appswaves assist you in keeping up with the rapidly changing IT world of today, from IT strategy to IT budgeting, from business continuity planning to cloud and data transfer services, and beyond.              `}
              />
              <P2
                text={`This enables us to create tailored ${service} app development plans for industries that cater to the ultra-specific needs of the customers. With experience developing more than 1000 apps for different sectors, our ${service} app development team knows what needs to be done to create the right app for you.`}
              />
              <GradientButton
                text={`Build Your Industry Specific ${service} App`}
                transparent={false}
                onClick={() => {
                  navigate("/contact");
                }}
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
          </section> */}
        </div>
        {/* <section className="why-section main-section">
          <div className="container">
            <div className="text-container">
              <P1
                text={`WHY CHOOSE OUR ${service} APP DEVELOPMENT SERVICES?`}
                color={"#ffffff"}
              />
              <h2
                style={{
                  color: "#ffffff",
                }}
                className="heading"
              >
                Building Wow-Worthy Experiences through Custom {service} App
                Development Service
              </h2>
              <P2
                text={`Partnering up with an ${service} application development company can help you reach a broader audience and go from local to global. With a feature-rich, user-friendly, and fully functional ${service} app, you can completely transform your business and build a community of loyal customers that will promote your app via word-of-mouth marketing.`}
                color={"#ffffff"}
              />
              <P2
                text={`The future of ${service} app development is more than just about applications. The advent of technologies such as wearable devices and Smart TVs gives rise to a new era of digital product development. In short, it is revolutionizing the ${service} app market by creating more demand for personalized applications from consumers.`}
                color={"#ffffff"}
              />
              <h2
                style={{
                  color: "#ffffff",
                }}
                className="heading"
              >
                How Appswaves’s {service} App Development Solutions can help you
                Scale
              </h2>
              <P2
                text={`At Appswaves, we aim to push boundaries when delivering the best ${service} app development services. Our end-to-end ${service} app development solutions enable businesses from different walks of life, i.e., SMEs, Startups, and enterprise-grade organizations, to pivot to a whole new level, unleash their business’s true potential, and unlock new opportunities and revenue streams through custom ${service} app development.`}
                color={"#ffffff"}
              />
              <P2
                text={`Our expert ${service} app developers ensure your app’s compatibility with modern technologies related to ${service}, i.e., wearable devices, ${service} TVs, and tablets. But it’s not just this field that we are currently disrupting – we’re aiming for the moon by implementing a revolutionary approach as a part of our ${service} app development process. Additionally, for businesses, mobile apps have created an avenue for better customer engagement, innovative marketing, personalization, data collection, and scaling in the target market.`}
                color={"#ffffff"}
              />
              <button
                style={{
                  margin: "0",
                }}
                className="white-button"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Schedule A Free Consultation Session{" "}
              </button>
            </div>
          </div>
        </section> */}
        {/* <section className="main-section end-service-section">
          <div className="container">
            <P1 text={"END-TO-END SERVICES"} color="#ef5123" center={true} />
            <h2
              style={{
                color: "#fff",
                textAlign: "center",
              }}
              className="heading"
            >
              Wide Spectrum of Custom {service} App Development Service
            </h2>
            <div className="service-details-grid">
              {[1, 2, 3, 4].map((v, i) => {
                return (
                  <div>
                    <h4>Custom App Development</h4>
                    <p>
                      We provide custom {service} application development
                      service that leverage modern technology stack and data
                      insights to build unique and innovative {service}{" "}
                      applications
                    </p>
                  </div>
                );
              })}
            </div>
            <GradientButton
              text="Connect With An Expert"
              transparent={false}
              center={true}
              onClick={() => {
                navigate("/contact");
              }}
            />
          </div>
        </section> */}
        {/* <section className="main-section solution-section">
          <div className="container">
            <div>
              <P1 text={"WHITE LABEL SOLUTIONS"} color="#ef5123" />
              <h2 className="heading">
                Full-Fledged {service} App Development Services
              </h2>
              <P2
                text={
                  "As a global tech solutions provider, Appswaves is always looking for new initiatives to pave the way for enterprise businesses and enlist top-grade tech support and solutions to help them achieve exponential growth."
                }
              />
              <P2
                text={`We have now started offering white label ${service} app development services that any firm can leverage to gain incredible value from customizing our already existing SaaS solutions in various niches.`}
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
        </section> */}
        {/* <section className="main-section end-service-section">
          <div className="container">
            <P1 text={"CLIENT BENEFITS"} color="#ef5123" />
            <h2
              style={{
                color: "#fff",
              }}
              className="heading"
            >
              Perks of Working with a Professional {service} App Development
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
                      text={`We provide custom ${service} application development service that leverage modern technology stack and data insights to build unique and innovative ${service} applications`}
                    />
                  </div>
                );
              })}
            </div>
            <GradientButton
              text="Discuss your goals with us"
              transparent={false}
              center={true}
              onClick={() => {
                navigate("/contact");
              }}
            />
          </div>
        </section> */}
        <section className="main-section build-section">
          <div className="container">
            <div className="text-container">
              <h2 className="heading">
                Do you want to take your business online with an {service} app
                that perfectly reflects your brand?
              </h2>
              <GradientButton
                text="Let’s Build Today"
                transparent={false}
                onClick={() => {
                  navigate("/contact");
                }}
              />
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
                <TextField
                  sx={{
                    flex: 1,
                    backgroundColor: "transparent",
                    // backgroundColor: "black",
                  }}
                  id="standard-select-currency"
                  select
                  defaultValue="Select Project Type"
                  variant="standard"
                >
                  {[
                    "Select Project Type",
                    " Website Design & Dev",
                    "UI/UX Design",
                    "Mobile App Design & Dev",
                    "Blockchain Project",
                  ].map((option, index) => (
                    <MenuItem
                      style={{
                        backgroundColor: "transparent",
                      }}
                      key={index}
                      value={option}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
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
              <button
                className="white-button"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                LET'S GET IN TOUCH
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ServiceDetails;

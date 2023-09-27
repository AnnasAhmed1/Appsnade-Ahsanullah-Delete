import React, { useRef } from "react";
import { H1, H2, H4 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import "../../Styles/service.css";
import ServiceCard from "../../Components/Services/ServiceCard";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Layout from "../../Layout";
import ButtonComp from "../../Helper/button_comp";
import axios from "axios";
import OurClients from "../../Components/OurClients";
import FeaturedSlider from "../../Components/FeaturedSlider";
import GradeSharpIcon from "@mui/icons-material/GradeSharp";
import AwardsSlider from "../../Components/Home/AwardsSlider";

const Events = () => {
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
      title: "Android App Development",
      description:
        "Appswaves develops next-gen iOS apps for businesses that ensure market disruption, growth, and scalability.",
    },

    {
      title: "iOS App Development",
      description:
        "Appswaves has a team of experienced Android App Developers that are ready to help you with your app idea.",
    },

    {
      title: "Cross Platform App Development",
      description:
        "Partner with Appswaves to get the most out of your next app project",
    },

    {
      title: "Custom Software Development",
      description:
        "Our custom software development services provide our clients with the freedom to grow and scale",
    },

    {
      title: "Startup App Development",
      description:
        "We rely on our modernized core to help startups to bring their app ideas to life",
    },

    {
      title: "Flutter app development",
      description:
        "Appswaves is a full-scale flutter app development company that build scalable mobile apps",
    },

    {
      title: "Web Development",
      description:
        "Establish a strong digital presence with custom website design and development services.",
    },

    {
      title: "Game Development",
      description:
        "Appswaves is a leading mobile game development company that develop high-quality mobile games",
    },

    {
      title: "React Native App Development",
      description:
        "Partner with Appswaves as your react native app development company.",
    },

    {
      title: "Mobile App Support",
      description:
        "Appswaves provides result-orientated and efficient application support and maintenance solution for after deployment.",
    },

    {
      title: "Wearable App Development",
      description:
        "Explore the limitless possibilities with wearable technology and expand your business through smarter, more efficient solutions.",
    },

    {
      title: "Cloud Native Development",
      description:
        "Creating and delivering an innovative business experience to your stakeholder.",
    },

    {
      title: "IoT Development",
      description:
        "An IoT application development company creating and delivering state-of-the-art & smart IoT",
    },

    {
      title: "API Integration",
      description:
        "Scale the capabilities of your business solutions through custom API development and integration services",
    },

    {
      title: "E-Commerce Software Development",
      description:
        "Scale the capabilities of your business solutions through custom API development and integration services",
    },

    {
      title: "Chatbot Development",
      description: "Boost customer engagement and communication efforts 10x",
    },
  ];

  const consultingServices = [
    {
      title: "Cloud Computing",
      description:
        "Cloud technology makes it possible to build excellent IT infrastructure",
    },

    {
      title: "CTO Consultant",
      description:
        "Work with C-level tech executives to experience fundamental digital transformation.",
    },

    {
      title: "Emerging Technology",
      description:
        "Appswaves delivers world-class enterprise emerging technology solution",
    },

    {
      title: "Digital Transformation",
      description:
        "As premier digital transformation consultants, our digital transformation services provide our clients",
    },

    {
      title: "Digital Marketplace",
      description:
        "Create fully-featured online niche marketplaces, attract relevant global traffic",
    },

    {
      title: "Data Analytics",
      description:
        "Appswaves’s big data analytics services are designed for enterprise organizations.",
    },

    {
      title: "Digital Strategy",
      description:
        "Our digital strategy consulting services are user-centric digitalized concepts",
    },

    {
      title: "Ip Protection",
      description:
        "Protecting Intellectual Property can be an incredibly expensive, time consuming and complex task.",
    },

    {
      title: "Technology Consulting",
      description:
        "Our tech consulting services encompass all the modern aspects",
    },

    {
      title: "MVP Software Development",
      description:
        "Appswaves is experienced in designing, developing, and launching minimum viable products",
    },

    {
      title: "Managing Mobility",
      description:
        "Appswaves helps you set up the architecture, build mobility systems",
    },

    {
      title: "ERP Development",
      description:
        "Appswaves’s enterprise technology services are suited for large institutions",
    },

    {
      title: "Lean Startup Plan",
      description:
        "Our lean startup services enable startups to find the right areas that impact consumers",
    },

    {
      title: "Research and Development",
      description:
        "Appswaves is a technology research and development company working to improve existing services",
    },
  ];
  const trendingServices = [
    {
      title: "AI Development",
      description:
        "Reach new levels of business success while combining human performance with machines, data, and algorithms",
    },

    {
      title: "AR/VR Company",
      description:
        "An AR/VR app development company to cater to next-gen digital media enthusiasts.",
    },

    {
      title: "Digital Strategy",
      description:
        "Our digital strategy consulting services are user-centric digitalized concepts",
    },

    {
      title: "Automation Consultancy",
      description:
        "Put the right talent, data, and intelligence into action for business transformation.",
    },

    {
      title: "Bluetooth App Development",
      description:
        "Deliver low-consumption interactive experiences to your end users through beacon-based digital products.",
    },

    {
      title: "NFT Development",
      description:
        "Appswaves boards experienced NFT developers in the industry to facilitate the digital assets",
    },

    {
      title: "Machine Learning",
      description:
        "Use ML solutions and establish stronger foundations for effective business processes",
    },

    {
      title: "Blockchain Development",
      description:
        "We are a Blockchain development services provider to help enterprises to acquire transparency and automation",
    },

    {
      title: "Metaverse Development",
      description:
        "Build your own shared and immersive experiences where players and avatars can engage with each other",
    },

    {
      title: "DevOps Consultancy",
      description:
        "Accomplish your technical delivery objectives and create, deploy and test your products and solutions faster.",
    },
  ];

  let fullName = "";
  let email = "";
  let number = "";
  let description = "";

  const types = [
    {
      title: "Podcasts",
      details:
        "Stores and organizes patient medical information, such as diagnoses, medications, and test results",
    },
    {
      title: "Webinars",
      details:
        "Allows remote consultation between doctors and patients using video conferencing or other tools like zoom",
    },
    {
      title: "Community Meetups",
      details:
        "Collects and monitors patient health data like heart rate, gluscose levels, blood pressure remotely",
    },

    {
      title: "Global Events",
      details:
        "Automates and streamlines hospital operations, such as patient scheduling, billing, and inventory management",
    },
  ];

  return (
    <Layout>
      <main className="services-main-container" style={{}}>
        <section className="consultation-section container">
          <div>
            <div style={{ color: "#14ffff" }}>
              <li>Home</li>
              <EastSharpIcon />
              <li>Events</li>
            </div>
            <H1
              text={"The Industry Leader In Thought Leadership Programs"}
              color="#14ffff"
            />
            <P1
              text={
                "Our Learning Resources Are Primed To Keep You In Touch With The Latest Trends In The World Of Tech & Entrepreneurship."
              }
              color={"#fff"}
            />
            <P1
              text={
                "Bringing The Most Talented People From The World Of Business, We Strive To Create Experiences That Stay With You and Help You Devise Actionable Insights In Order To Power Your Business Forward."
              }
              color={"#fff"}
            />
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
        <div
          style={{
            backgroundColor: "#f8f8fb",
          }}
        >
          <section className="main-section container consultation-section">
            <div>
              <H2 text={"Save The Data Our Programs Are Now Live"} />
              <P1
                text={
                  "Subscribe with Us Via Your Email So That You Don’t Miss Out On An Once In a Lifetime Events!"
                }
              />

              <ButtonComp text="Subscribe Now" transparent={true} />
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/events_program.png")}
                alt=""
              />
            </div>
          </section>
        </div>
        <div className="estimation-section">
          <section
            style={{
              paddingBottom: "0px",
            }}
            className=" main-section container"
          >
            <div>
              <H2
                text={"We Offer Multiple Types Of Events All The Year Round:"}
                dataText="Multiple Types"
                color="#ffffff"
              />
              <P1
                text={
                  "As a leading mobile app development company, Appswaves has a portfolio of digital healthcare solutions built for healthcare practitioners, hospitals, clinics, and patients"
                }
                color="#ffffff"
              />
            </div>
            <div></div>
          </section>
          <section
            style={{
              paddingTop: "0px",
            }}
            className="main-section popular-topics container"
          >
            <div
              style={{
                marginTop: "50px",
              }}
            >
              {types?.map((type, index) => {
                return (
                  <div className="topics-card podcast-card events-types">
                    <H4 text={type.title} />
                    <P1 text={type.details} />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        {/* <section className="awards-section main-section container">
          <div className="awards">
            <H2 text={"Awards & Recognitions"} dataText="Winning Awards" />
            <P1
              text={
                "We thrive on accelerating the path to disruption and implementing agile methodology to build feature-rich, user-friendly mobile apps that end users love. Our user-centric, quality-driven, and future-oriented mobile app development services are the reason why we have bagged these notorious awards and recognitions."
              }
            />
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
        <div className="container">
          <AwardsSlider />
        </div>

        <section className="main-section container consultation-section">
          <div>
            <img
              style={{
                width: "100%",
              }}
              src={require("../../Assets/latest_events.png")}
              alt=""
            />
          </div>
          <div>
            <H2 text={"Latest Event:"} color="#14ffff" />
            <P1
              color="#fff"
              text={
                "Each episode of Technology For Change explores the journey of successful entrepreneurs, and how someone took an idea and grew it into a successful business. We are coming forward with the aim to help bring in a positive change in people’s life using technological solutions."
              }
            />
            <P1
              color="#fff"
              text={
                "Looking to scale your own business with the help of technology? Check out our business podcasts as we discuss how you can use technology to power the next cycle of growth for your business."
              }
            />

            <ButtonComp text="Listen Now On Spotify" transparent={true} />
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

export default Events;

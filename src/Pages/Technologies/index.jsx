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

const Technologies = () => {
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
      title: ".Net",
      description:
        "Appswaves uses the .NET platform to build state-of-the-art software systems. We build technologies using .NET that help you in every walk of life.",
    },

    {
      title: "HTML5",
      description:
        "We help businesses build robust digital solutions for internal operational and diverse customer segments, including web, apps, and SaaS.",
    },

    {
      title: "Java",
      description:
        "Our native app development solutions for Android have enabled many of our clients to achieve their targets and see unprecedented business growth.",
    },

    {
      title: "Node.js",
      description:
        "Get an interactive web app or a data-intensive program with a robust backend with Appswaves’s Node.js developers.",
    },

    {
      title: "PHP",
      description:
        "We is a PHP development company encompassing all the solutions you may require while developing a backend solution for your business",
    },

    {
      title: "Python",
      description:
        "We are a python development company using Python for web development, CMS portals, machine learning.",
    },

    // {
    //   title: "Web Development",
    //   description:
    //     "Establish a strong digital presence with custom website design and development services.",
    // },

    // {
    //   title: "Game Development",
    //   description:
    //     "Appswaves is a leading mobile game development company that develop high-quality mobile games",
    // },

    // {
    //   title: "React Native App Development",
    //   description:
    //     "Partner with Appswaves as your react native app development company.",
    // },

    // {
    //   title: "Mobile App Support",
    //   description:
    //     "Appswaves provides result-orientated and efficient application support and maintenance solution for after deployment.",
    // },

    // {
    //   title: "Wearable App Development",
    //   description:
    //     "Explore the limitless possibilities with wearable technology and expand your business through smarter, more efficient solutions.",
    // },

    // {
    //   title: "Cloud Native Development",
    //   description:
    //     "Creating and delivering an innovative business experience to your stakeholder.",
    // },

    // {
    //   title: "IoT Development",
    //   description:
    //     "An IoT application development company creating and delivering state-of-the-art & smart IoT",
    // },

    // {
    //   title: "API Integration",
    //   description:
    //     "Scale the capabilities of your business solutions through custom API development and integration services",
    // },

    // {
    //   title: "E-Commerce Software Development",
    //   description:
    //     "Scale the capabilities of your business solutions through custom API development and integration services",
    // },

    // {
    //   title: "Chatbot Development",
    //   description: "Boost customer engagement and communication efforts 10x",
    // },
  ];

  const consultingServices = [
    {
      title: "Azure",
      description:
        "Appswaves helps you create and deliver innovative business experiences to your stakeholders on a secure, robust Microsoft Azure cloud infrastructure.",
    },

    {
      title: "GCP",
      description:
        "We helps its clients migrate, modernize and transform their data with GCP Cloud, the Google Cloud Platform service",
    },

    {
      title: "Oracle",
      description:
        "Our Oracle consulting services enable businesses to build and manage cloud applications with the right tools",
    },

    {
      title: "SAP",
      description:
        "For clients from diverse industries, our SAP consultants have helped them achieve a stable organizational structure",
    },

    // {
    //   title: "Digital Marketplace",
    //   description:
    //     "Create fully-featured online niche marketplaces, attract relevant global traffic",
    // },

    // {
    //   title: "Data Analytics",
    //   description:
    //     "Appswaves’s big data analytics services are designed for enterprise organizations.",
    // },

    // {
    //   title: "Digital Strategy",
    //   description:
    //     "Our digital strategy consulting services are user-centric digitalized concepts",
    // },

    // {
    //   title: "Ip Protection",
    //   description:
    //     "Protecting Intellectual Property can be an incredibly expensive, time consuming and complex task.",
    // },

    // {
    //   title: "Technology Consulting",
    //   description:
    //     "Our tech consulting services encompass all the modern aspects",
    // },

    // {
    //   title: "MVP Software Development",
    //   description:
    //     "Appswaves is experienced in designing, developing, and launching minimum viable products",
    // },

    // {
    //   title: "Managing Mobility",
    //   description:
    //     "Appswaves helps you set up the architecture, build mobility systems",
    // },

    // {
    //   title: "ERP Development",
    //   description:
    //     "Appswaves’s enterprise technology services are suited for large institutions",
    // },

    // {
    //   title: "Lean Startup Plan",
    //   description:
    //     "Our lean startup services enable startups to find the right areas that impact consumers",
    // },

    // {
    //   title: "Research and Development",
    //   description:
    //     "Appswaves is a technology research and development company working to improve existing services",
    // },
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

  return (
    <Layout>
      <main className="services-main-container container" style={{backgroundColor:"#000"}}>
        <section className="consultation-section">
          <div>
            <div  style={{color:"#14ffff"}}>
              <li>Appswaves</li>
              <EastSharpIcon />
              <li>Technologies </li>
            </div>
            <H1 text={"Revolutionary Technologies For A Changing World"} color={"#14ffff"}/>
            <P1
              text={
                "At Appswaves, we harness the power of revolutionary technologies, employing a diverse range of programming languages and platforms to create custom solutions that perfectly align with the unique needs of our clients."
              }
              color={"#ffff"}
            />
            <ul className="helper-p1" style={{color:'#fff'}}>
              <li>Emerging technology adoption</li>
              <li>Cross-platform compatibilitys</li>
              <li>Agile development process</li>
              <li>Scalable infrastructure management</li>
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
          <H2 text={"Languages"} dataText="Primary" color={"#14ffff"} />
          <div>
            {primaryService.map((service, index) => {
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
        </section>
        <section className="primary-service-section main-section">
          <H2 text={"Platforms"} dataText="Consulting" color={"#14ffff"} />
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
        </section>
        {/* <section className="primary-service-section main-section">
          <H2 text={"Trending Services"} dataText="Trending" />
          <div>
            {trendingServices.map((service, index) => {
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

export default Technologies;

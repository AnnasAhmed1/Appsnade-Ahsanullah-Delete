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

const Services = () => {
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

  return (
    <Layout>
      <main className="services-main-container container" style={{backgroundColor:"#000"}}>
        <section className="consultation-section" >
          <div>
            <div style={{color:'#14ffff'}}>
              <li>Appswaves</li>
              <EastSharpIcon color="red"/>
              <li style={{color:'#fff'}}>Services</li>
            </div>
            <H1 color="#14ffff"
              text={"Transform Business Growth With Revolutionary Services"}
            />
            <P1
              text={
                "Our unwavering commitment to innovation and customer satisfaction drives us to deliver transformative services that effectively address the ever-evolving demands of businesses in the digital world, ensuring exceptional results and driving impactful transformations."
              }
              color={"#ffff"}
            />
            <ul className="helper-p1" style={{color:'#fff'}}>
              <li>Strategic roadmap planning</li>
              <li>Cloud-based solutions</li>
              <li>Process automation implementation</li>
              <li>Data-driven insights</li>
            </ul>
          </div>
          <div>
            <form ref={formRef} onSubmit={handleSubmit} action="">
              <h2 className="helper-h2" >
                Book A Free<span style={{color:"#000"}}> Consultation</span>
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
              <ButtonComp text="Get in Touch" center={true}/>
            </form>
          </div>
        </section>
        <div style={{backgroundColor:"#000"}}>
        <FeaturedSlider />
        </div>
        <section className="primary-service-section main-section">
          <H2 text={"Primary Services"} dataText="Primary" color="#14ffff"/>
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
          <H2 text={"Consulting Services"} dataText="Consulting"  color="#14ffff"/>
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
        <section className="primary-service-section main-section">
          <H2 text={"Trending Services"} dataText="Trending" color="#14ffff"/>
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

export default Services;

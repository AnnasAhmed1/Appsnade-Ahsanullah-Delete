// import React, { useEffect, useState } from "react";
// import "../../Styles/home.css";
// import ColoredHeading from "../../Components/Colored_heading";
// import HomeSilder from "../../Components/Home/HomeSilder";
// import DevelopmentList from "../../Components/Home/DevelopmentList";
// import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
// import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
// import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
// import { H1, H2, H3, H4, H5 } from "../../Helper/headings";
// import { P1, P2 } from "../../Helper/paragraphs";
// import ButtonComp from "../../Helper/button_comp";
// import GradeSharpIcon from "@mui/icons-material/GradeSharp";
// import AwardsSlider from "../../Components/Home/AwardsSlider";
// import EastSharpIcon from "@mui/icons-material/EastSharp";
// import AppTypes from "../../Components/Home/AppTypes";
// import PersonalInfo from "../../Components/Home/PersonalInfo";
// import Layout from "../../Layout";
// import Navbar from "../../Components/navbar";
// import Footer from "../../Components/footer";
// import { Link } from "react-router-dom";
// import OurClients from "../../Components/OurClients";
// import FeaturedSlider from "../../Components/FeaturedSlider";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom";
// import AppSlider from "../../Components/Home/AppSlider";

// const Home = () => {
//   const [active, setActive] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     Aos.init({ duration: 3000 });
//   }, []);
//   const developmentItems = [
//     {
//       title: "Startups",
//       icon: (
//         <PanoramaFishEyeIcon
//           sx={{
//             fontSize: "20px",
//             color: "#fff",
//           }}
//         />
//       ),
//       items: [
//         "Startup App Development",
//         "Startup Prototype",
//         "E-Commerce Development",
//       ],
//     },
//     {
//       title: "SMB",
//       icon: (
//         <SquareOutlinedIcon
//           sx={{
//             fontSize: "20px",
//             color: "#ffff",
//           }}
//         />
//       ),
//       items: [
//         "Flutter App Development",
//         "Mobile App Support",
//         "Wearable App Development",
//       ],
//     },
//     {
//       title: "Enterprise",
//       icon: (
//         <ChangeHistoryIcon
//           sx={{
//             fontSize: "20px",
//             color: "#ffff",
//           }}
//         />
//       ),
//       items: [
//         "IT Staff Augmentation",
//         "Blockchain Development",
//         "IP Protection",
//       ],
//     },
//   ];

//   const expertise = [
//     {
//       title: "Healthcare",
//       description:
//         "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
//       details: [
//         {
//           heading: "Remote care",
//           para: "Making appointments and filling out documents remotely.",
//         },
//         {
//           heading: "Accessibility",
//           para: "Access to lab results and medical history via digital personal health records",
//         },
//         {
//           heading: "Reminders & alerts",
//           para: "Remind users to take pills, and control rehabilitation plans and appointments.",
//         },
//       ],
//     },
//     {
//       title: "Fintech",
//       description:
//         "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
//       details: [
//         {
//           heading: "Remote care",
//           para: "Making appointments and filling out documents remotely.",
//         },
//         {
//           heading: "Accessibility",
//           para: "Access to lab results and medical history via digital personal health records",
//         },
//         {
//           heading: "Reminders & alerts",
//           para: "Remind users to take pills, and control rehabilitation plans and appointments.",
//         },
//       ],
//     },
//     {
//       title: "Retail",
//       description:
//         "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
//       details: [
//         {
//           heading: "Remote care",
//           para: "Making appointments and filling out documents remotely.",
//         },
//         {
//           heading: "Accessibility",
//           para: "Access to lab results and medical history via digital personal health records",
//         },
//         {
//           heading: "Reminders & alerts",
//           para: "Remind users to take pills, and control rehabilitation plans and appointments.",
//         },
//       ],
//     },
//     {
//       title: "Real State",
//       description:
//         "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
//       details: [
//         {
//           heading: "Remote care",
//           para: "Making appointments and filling out documents remotely.",
//         },
//         {
//           heading: "Accessibility",
//           para: "Access to lab results and medical history via digital personal health records",
//         },
//         {
//           heading: "Reminders & alerts",
//           para: "Remind users to take pills, and control rehabilitation plans and appointments.",
//         },
//       ],
//     },
//     {
//       title: "Education",
//       description:
//         "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
//       details: [
//         {
//           heading: "Remote care",
//           para: "Making appointments and filling out documents remotely.",
//         },
//         {
//           heading: "Accessibility",
//           para: "Access to lab results and medical history via digital personal health records",
//         },
//         {
//           heading: "Reminders & alerts",
//           para: "Remind users to take pills, and control rehabilitation plans and appointments.",
//         },
//       ],
//     },
//     {
//       title: "Logistics",
//       description:
//         "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
//       details: [
//         {
//           heading: "Remote care",
//           para: "Making appointments and filling out documents remotely.",
//         },
//         {
//           heading: "Accessibility",
//           para: "Access to lab results and medical history via digital personal health records",
//         },
//         {
//           heading: "Reminders & alerts",
//           para: "Remind users to take pills, and control rehabilitation plans and appointments.",
//         },
//       ],
//     },
//     {
//       title: "On-Demand",
//       description:
//         "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
//       details: [
//         {
//           heading: "Remote care",
//           para: "Making appointments and filling out documents remotely.",
//         },
//         {
//           heading: "Accessibility",
//           para: "Access to lab results and medical history via digital personal health records",
//         },
//         {
//           heading: "Reminders & alerts",
//           para: "Remind users to take pills, and control rehabilitation plans and appointments.",
//         },
//       ],
//     },
//     {
//       title: "Ecommerce",
//       description:
//         "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
//       details: [
//         {
//           heading: "Remote care",
//           para: "Making appointments and filling out documents remotely.",
//         },
//         {
//           heading: "Accessibility",
//           para: "Access to lab results and medical history via digital personal health records",
//         },
//         {
//           heading: "Reminders & alerts",
//           para: "Remind users to take pills, and control rehabilitation plans and appointments.",
//         },
//       ],
//     },
//     {
//       title: "Music",
//       description:
//         "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
//       details: [
//         {
//           heading: "Remote care",
//           para: "Making appointments and filling out documents remotely.",
//         },
//         {
//           heading: "Accessibility",
//           para: "Access to lab results and medical history via digital personal health records",
//         },
//         {
//           heading: "Reminders & alerts",
//           para: "Remind users to take pills, and control rehabilitation plans and appointments.",
//         },
//       ],
//     },
//   ];

//   const insights = [
//     {
//       text: "ASIM RAIS SIDDIQUI’S ARTICLE ON HOW ARTIFICIAL INTELLIGENCE DRIVES AUTOMATION & REDUCE COSTS IN RECRUITMENT INDUSTRY IS LIVE NOW ON HACKERNOON",
//       date: "May 5, 2023",
//     },
//     {
//       text: "TOP 10 FACIAL RECOGNITION APPS IN 2023",
//       date: "May 3, 2022",
//     },
//     {
//       text: "LISTING DOWN THE 13 APPS LIKE OMEGLE THAT YOU SHOULD CHECKOUT IN 2023",
//       date: "March 5, 2021",
//     },
//     {
//       text: "50 Game Development Ideas for Future Game Startups and Entrepreneurs",
//       date: "February 1, 2023",
//     },
//     {
//       text: "10 Offline Music Apps To Try in 2023",
//       date: "December 1, 2021",
//     },
//     {
//       text: "The 12 Best Image Recognition Apps That You Should Try In 2023",
//       date: "March 4, 2021",
//     },
//   ];

//   const primaryService = [
//     {
//       title: "Android App Development",
//     },

//     {
//       title: "iOS App Development",
//       marginLeft: 20,
//     },

//     {
//       title: "Cross Platform App Development",
//       marginLeft: 30,
//     },

//     {
//       title: "Custom Software Development",
//       marginLeft: 40,
//     },

//     {
//       title: "Startup App Development",
//       description:
//         "We rely on our modernized core to help startups to bring their app ideas to life",
//     },

//     {
//       title: "Flutter app development",
//       description:
//         "Appswaves is a full-scale flutter app development company that build scalable mobile apps",
//     },

//     {
//       title: "Web Development",
//       description:
//         "Establish a strong digital presence with custom website design and development services.",
//     },

//     {
//       title: "Game Development",
//       description:
//         "Appswaves is a leading mobile game development company that develop high-quality mobile games",
//     },

//     {
//       title: "React Native App Development",
//       description:
//         "Partner with Appswaves as your react native app development company.",
//     },

//     {
//       title: "Mobile App Support",
//       description:
//         "Appswaves provides result-orientated and efficient application support and maintenance solution for after deployment.",
//     },

//     {
//       title: "Wearable App Development",
//       description:
//         "Explore the limitless possibilities with wearable technology and expand your business through smarter, more efficient solutions.",
//     },

//     {
//       title: "Cloud Native Development",
//       description:
//         "Creating and delivering an innovative business experience to your stakeholder.",
//     },

//     {
//       title: "IoT Development",
//       description:
//         "An IoT application development company creating and delivering state-of-the-art & smart IoT",
//     },

//     {
//       title: "API Integration",
//       description:
//         "Scale the capabilities of your business solutions through custom API development and integration services",
//     },

//     {
//       title: "E-Commerce Software Development",
//       description:
//         "Scale the capabilities of your business solutions through custom API development and integration services",
//     },

//     {
//       title: "Chatbot Development",
//       description: "Boost customer engagement and communication efforts 10x",
//     },
//   ];

//   return (
//     <>
//       <Layout>
//         <main data-aos="fade" className="home-main-container">
//           <div data-aos="fade" className="container" style={{}}>
//             <section data-aos="ease-in-sine" className="main-section">
//               <HomeSilder />
//               <div data-aos="fade-right" className="developmentListContainer">
//                 {developmentItems.map((v, i) => {
//                   return (
//                     <DevelopmentList
//                       title={v.title}
//                       icon={v.icon}
//                       listItems={v.items}
//                     />
//                   );
//                 })}
//               </div>
//             </section>

//             {/* <section className="awards-section main-section">
//               <div className="awards">
//                 <H2 text={"Awards & Recognitions"} dataText="Winning Awards" />
//                 <P1
//                   text={
//                     "We thrive on accelerating the path to disruption and implementing agile methodology to build feature-rich, user-friendly mobile apps that end users love. Our user-centric, quality-driven, and future-oriented mobile app development services are the reason why we have bagged these notorious awards and recognitions."
//                   }
//                 />
//                 <ButtonComp text="Check Reviews" />
//               </div>
//               <div className="ratings">
//                 <p>65+ reviews on clutch</p>
//                 <h1>4.9</h1>
//                 <div>
//                   <GradeSharpIcon />
//                   <GradeSharpIcon />
//                   <GradeSharpIcon />
//                   <GradeSharpIcon />
//                   <GradeSharpIcon />
//                 </div>
//               </div>
//             </section> */}
//             <AwardsSlider />

//             <section
//               data-aos="zoom-in"
//               className="crafting-section main-section"
//             >
//               <div>
//                 <H2
//                   color="#14ffff"
//                   text={
//                     "Creating return for money invested Driven Arrangements Right!"
//                   }
//                   dataText="ROI-Centric"
//                 />
//                 <P1
//                   color="#ffff"
//                   text={
//                     "Get reliable mobile application development services created by a reputable mobile app development company supported by a team of highly qualified developers to create future-ready applications. We provide top-tier mobile application development services that are adapted to the aims and objectives of the stakeholders and possess expertise in native, cross-platform, and hybrid mobile app development. With a combination of digital, SaaS, and legacy technologies, we assist app development companies in innovating difficult application environments."
//                   }
//                 />
//               </div>
//               <img
//                 data-aos="flip-left"
//                 src={require("../../Assets/calendar.webp")}
//                 alt=""
//               />
//             </section>
//           </div>

//           {/* Ahsan Code  */}
//           {/* <div className="featured-container main-section" style={{ backgroundColor: "#023030" }}>
//             <div className="container">
//               <div data-aos='zoom-in'>
//                 <h1
//                   onClick={() => {
//                     navigate(`/services`);
//                   }}
//                   data-aos-offset="200"
//                   data-aos-delay="100"
//                   data-aos-duration="2000"
//                   data-aos-easing="ease-in"
//                   data-aos-mirror="true"
//                   data-aos-once="false"
//                   data-aos-anchor-placement="top-center"
//                   style={{ color: "#14ffff", fontSize: 60 }}>Flutter App Development</h1>
//               </div>

//               <div data-aos='zoom-in'>
//                 <h1
//                   onClick={() => {
//                     navigate(`/solutions`);
//                   }}
//                   data-aos-offset="200"
//                   data-aos-delay="400"
//                   data-aos-duration="3000"
//                   data-aos-easing="ease-in"
//                   data-aos-mirror="true"
//                   data-aos-once="false"
//                   data-aos-anchor-placement="top-center"
//                   style={{ color: "#14ffff", fontSize: 60, marginLeft: 100 }}>Game App Development</h1>
//               </div>

//               <div data-aos='zoom-in'>
//                 <h1
//                   data-aos-offset="200"
//                   data-aos-delay="800"
//                   data-aos-duration="4000"
//                   data-aos-easing="ease-in"
//                   data-aos-mirror="true"
//                   data-aos-once="false"
//                   data-aos-anchor-placement="top-center"
//                   style={{ color: "#14ffff", fontSize: 60, marginLeft: 200 }}>React Native  Development</h1>
//               </div>

//               <div data-aos='zoom-in'>
//                 <h1
//                   data-aos-offset="200"
//                   data-aos-delay="1000"
//                   data-aos-duration="5000"
//                   data-aos-easing="ease-in"
//                   data-aos-mirror="true"
//                   data-aos-once="false"
//                   data-aos-anchor-placement="top-center"
//                   style={{ color: "#14ffff", fontSize: 60, marginLeft: 300 }}>Web Design Development</h1>
//               </div>


//             </div>
//             <button className="white-button">Lets Work Together</button>
//           </div> */}

//           {/* <section className="primary-service-section main-section" style={{ backgroundColor: "#023030" }}>
//             <H1 text={"Technology"} dataText="Technology" color="#ffff" center={true}  />
//             <P2
//                   text={"Appswaves develops next-gen mobile apps as well as websites for businesses that ensure market disruption, growth, and scalability."}
//                   color="#fff"
//                   center={true}
//                 />

//             <div data-aos='zoom-in'>
//               {primaryService.map((service, index) => {
//                 return (
//                   <AppSlider
//                     key={index}
//                     title={service.title}
//                     route={"services"}  
//                   />
//                 );
//               })}
//             </div>
//           </section> */}
//           <div
//             className="featured-container main-section"
//             style={{ backgroundColor: "#fff", padding: 50 }}
//           >
//             <div data-aos="fade">
//               <h1
//                 className="featured-heading"
//                 data-aos="slide-left"
//                 center={true}
//                 duration={2000}
//                 style={{ color: "#000", textAlign: "center" }}
//               >
//                 Featured
//               </h1>
//               <h1
//                 className="featured-heading"
//                 data-aos="slide-right"
//                 duration={1500}
//                 style={{ color: "#14ffff", textAlign: "center" }}
//               >
//                 Projects
//               </h1>
//             </div>
//             <div data-aos="slide-right">
//               <P2
//                 text={"Transforming product ideas into digital realities"}
//                 color="#000"
//                 center={true}
//               />
//             </div>

//             <div data-aos="slide-left">
//               <P2
//                 text={"with passion, innovation, and dedication"}
//                 color="#000"
//                 center={true}
//               />
//             </div>
//           </div>
//           <div data-aos="slide-right" className="estimation-section" style={{}}>
//             <section
//               data-aos="zoom-in-down"
//               duration="2000"
//               className=" main-section container"
//             >
//               <H2
//                 text={
//                   "Assisting new app development companies to reach outstanding levels of custom app development"
//                 }
//                 dataText="Sustainability"
//                 color="#14ffff"
//               />
//               <div>
//                 <P1
//                   text={
//                     "We as a mobile app development company have transformed from a small startup to one of the most rapidly expanding digital transformation app design company that globally won the industry's most prestigious awards and been recognized in Forbes, Inc. Entrepreneur Media, and other top publications as an industry leader in mobile app development companies."
//                   }
//                   color="#ffffff"
//                 />
//                 <Link to={"/app-cost-calculator"}>
//                   {" "}
//                   <ButtonComp
//                     text="Estimate Your Project's Cost"
//                     color={"red"}
//                   />
//                 </Link>
//               </div>
//             </section>
//           </div>
//           <div style={{}}>
//             <div
//               style={{
//                 zIndex: "2",
//               }}
//               className="container"
//             >
//               <section className="main-section">
//                 <H2
//                   color={"#14ffff"}
//                   text={"Case Studies"}
//                   dataText="Our Portfolio"
//                 />
//                 <P1
//                   color={"#fff"}
//                   text={
//                     "For a list of the completed and delivered projects for our clients in various endeavors, see the section below. The team of agile designers and project executives at Appswaves adopts projects and attends to the client's requirements according to a defined process. As a mobile app development company we emphasize strongly coordinating with your group for the major turn of events, our way of life is appropriately built to transmit a compensating experience for our design group and the client."
//                   }
//                 />
//               </section>
//               <section data-aos="flip-left" className="AMJ-section">
//                 <H2 data-aos="zoom-in" text={"The Idea Behind Fitness App"} />
//                 <P1
//                   data-aos="zoom-in"
//                   text={
//                     "The application needs to be highly adaptable, have a connecting point, and be less distracting for corporate workers who already find themselves in challenging circumstances. It needs to be emphasized that it is pressed and targeted at promoting well-being behaviors like getting sufficient rest, exercising, drinking enough water, eating well at breakfast, snacks, and dinner, and taking breaks from screens. As a mobile app development company, we carefully examined the target market, projected customers, and the entire scope of the project."
//                   }
//                 />
//                 <img
//                   data-aos="flip-left"
//                   src={require("../../Assets/Fitness Img.png")}
//                   alt=""
//                 />
//               </section>

//               {/* <PersonalInfo
//                 text={`“They love creating apps to help better the world, help better the society, so they immediately had a connection with my idea."`}
//                 name={"Andrea Eimers"}
//                 designation={"AMJ Wellness , Co-Founder & COO"}
//                 image={"amj_owner.png"}
//               /> */}
//               <section data-aos="fade-in" className="soundly-section">
//                 <div>
//                   {/* <AppTypes data-aos='zoom-in' image={"soundly.png"} color={"#DA2024"} /> */}
//                   <H2
//                     text={"The Idea Behind the Soundly App"}
//                     data-aos="fade-in"
//                   />
//                   <P1
//                     data-aos="zoom-in"
//                     text={
//                       "The way that people listen to music has been transformed by Soundly. The Soundly app was developed to let listeners stream millions of songs from new artists through the app. You can save songs for later by making countless playlists, uploading your tracks, supporting your favorite artists, and taking advantage of how next-generation technology and music are combined in perfect harmony."
//                     }
//                   />
//                   <P1
//                     data-aos="zoom-out"
//                     text={
//                       "The concept was not only to create a ground-breaking entertainment app, but also to guarantee predictive, user-friendly, and smooth navigation and controls that would enable users to contribute their songs or quickly tap their way to their favorite songs by new artists."
//                     }
//                   />
//                 </div>
//                 <div data-aos="zoom-in" className="image-container">
//                   <img
//                     data-aos="zoom-in"
//                     src={require("../../Assets/soundly_mobile.png")}
//                     alt=""
//                   />
//                 </div>
//               </section>
//               {/* <PersonalInfo
//                 text={`“We truly appreciate how much Appswaves cares about our project, from the beginning point to the deployment, they delivered everything efficiently."`}
//                 name={"Ethan Dobbins"}
//                 designation={"Soundly, CEO"}
//                 image={"soundly_ceo.png"}
//               /> */}
//               <section
//                 data-aos="zoom-in"
//                 style={{
//                   backgroundColor: "#212529",
//                   marginTop: "5%",
//                 }}
//                 className="soundly-section"
//               >
//                 <div>
//                   {/* <AppTypes image={"pure_plank_logo.png"} color={"#8EF08B"} /> */}
//                   <H2
//                     data-aos="zoom-in"
//                     text={"The Idea Behind Pure Plank"}
//                     color="#ffffff"
//                   />
//                   <P1
//                     data-aos="zoom-in"
//                     text={
//                       "Plank is a website for fitness and exercise enthusiasts who want to maintain their health and work out at home. This platform gives a novel concept of life through challenges and video training. Appswaves has created several digital products, including mobile custom app development, for the healthcare and fitness businesses."
//                     }
//                     color="#ffffff"
//                   />
//                   <P1
//                     data-aos="zoom-in"
//                     text={
//                       "The Plank app is a comprehensive solution for the planking workout that gives users access to all the features and capabilities they need in one location for the best results. The software also offered users the chance to purchase accessories with full payment integration possibilities, as well as video demonstrations and instructions."
//                     }
//                     color="#ffffff"
//                   />
//                 </div>
//                 <div data-aos="fade-in" className="image-container">
//                   <img
//                     data-aos="zoom-in"
//                     src={require("../../Assets/pure_plank.webp")}
//                     alt=""
//                   />
//                 </div>
//               </section>
//               {/* <PersonalInfo
//                 text={`“I had the pleasure of working with Appswaves on the development of our fitness app, and I am extremely impressed with the level of service they provided. Their team was incredibly knowledgeable, professional, and dedicated to ensuring that our app was developed to the highest standard."`}
//                 name={"Ari Marinovsky"}
//                 designation={"Pure Plank, CEO"}
//                 image={"pure_plank_ceo.jpeg"}
//               /> */}
//             </div>
//           </div>

//           {/* <div data-aos='zoom-in' className="container">
//             <section data-aos='zoom-in' className="main-section services-section">
//               <div>
//                 <H2 data-aos='zoom-in'
//                   color={'#14ffff'}
//                   text={"Custom Software & Mobile App Development Company"}
//                   dataText="App Development"
//                 />
//               </div>
//               <div>
//                 <P1 data-aos='zoom-in'
//                   color={'#ffff'}
//                   text={
//                     "The future is digital, there's no doubt about it. At Appswaves, we believe that each digital touch-point is an opportunity to create meaningful interactions and build a mutually beneficial connection between a brand and its audience. We offer a wide range of software development services that has helped us attain a strong digital presence in the highly competitive market."
//                   }
//                 />
//                 <H4 data-aos='zoom-in' text={"Custom Software Development"} color={'#14ffff'} />
//                 <p style={{ color: '#ffff' }} className="helper-p1" data-aos='zoom-in' color={'#14ffff'}>
//                   Our <span>custom software development</span> team onboards
//                   versatile developers and technical personnel capable of
//                   acknowledging your project’s custom requirements.
//                 </p>
//                 <H4 data-aos='zoom-in' text={"Android Application Development"} color={'#14ffff'} />
//                 <p style={{ color: '#ffff' }} className="helper-p1" data-aos='zoom-in'>
//                   Craft the ideal product by redirecting your strategy in the
//                   right direction. Start ahead with your
//                   <span> Android application development</span> journey. With
//                   your insights in mind, our collaborative sentiment will
//                   continue to grow – building robust and custom applications for
//                   you.
//                 </p>
//                 <H4 data-aos='zoom-in' text={"Top-Rated iOS App Development Services"} color={'#14ffff'} />
//                 <p style={{ color: '#ffff' }} className="helper-p1" data-aos='zoom-in'>
//                   Hire iOS app developers from top-tier
//                   <span> iOS app development company</span> to kick-start your
//                   app entrepreneurial journey like never before!
//                 </p>
//                 <H4 data-aos='zoom-in' text={"Game Development"} color={'#14ffff'} />
//                 <p style={{ color: '#ffff' }} className="helper-p1" data-aos='zoom-in'>
//                   <span>Hire game developers </span> who will create{" "}
//                   <span> cross-platform game development </span> solutions that
//                   engage, and captivate users to the fullest.
//                 </p>
//               </div>
//             </section>
//           </div> */}
//           <section
//             data-aos="zoom-in"
//             style={{
//               backgroundColor: "#ffff",
//             }}
//             className="main-section expertise-section"
//           >
//             <div className="container" data-aos="zoom-in">
//               <H2
//                 text={"Our Industry Expertise"}
//                 color="#000"
//                 dataText="Our Expertise"
//                 data-aos="zoom-in"
//               />
//               <div className="expertise container" data-aos="zoom-in">
//                 <div className="expertiseList" data-aos="zoom-in">
//                   {expertise.map((v, i) => {
//                     return (
//                       <H3
//                         text={v.title}
//                         pointer={true}
//                         onClick={() => {
//                           setActive(i);
//                         }}
//                       />
//                     );
//                   })}
//                 </div>
//                 <div className="expertiseDetails" data-aos="zoom-in">
//                   <>
//                     <p style={{ color: "#000" }}>
//                       {expertise[active]?.description}
//                     </p>
//                     {expertise[active]?.details.map((detail, index) => {
//                       return (
//                         <>
//                           <H4 color="#000" text={detail.heading} />
//                           <P1 color="#000" text={detail.para} />
//                         </>
//                       );
//                     })}
//                   </>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section
//             data-aos="zoom-in"
//             className="main-section/ insights-section"
//           >
//             <div className="container" data-aos="zoom-out">
//               <div className="insights-list" data-aos="zoom-out">
//                 <div>
//                   {/* <H5 text={insights[0].text} />
//               <p>{insights[0].date}</p>
//               <H5 text={insights[1].text} />
//               <p>{insights[1].date}</p> */}
//                 </div>
//               </div>
//               {/* <div>
//             {insights.slice(3).map((v, i) => {
//               console.log(v);
//               return (
//                 <div className="insights-second-half">
//                   <H5 text={v.text} />
//                   <p>{v.date}</p>
//                 </div>
//               );
//             })}
//           </div> */}
//             </div>
//           </section>

//           <FeaturedSlider />
//           {/* <OurClients
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
//           /> */}
//         </main>
//       </Layout>
//     </>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import "../../Styles/home.css";
import ColoredHeading from "../../Components/Colored_heading";
import HomeSilder from "../../Components/Home/HomeSilder";
import DevelopmentList from "../../Components/Home/DevelopmentList";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { H1, H2, H3, H4, H5 } from "../../Helper/headings";
import { P1, P2 } from "../../Helper/paragraphs";
import ButtonComp from "../../Helper/button_comp";
import GradeSharpIcon from "@mui/icons-material/GradeSharp";
import AwardsSlider from "../../Components/Home/AwardsSlider";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import AppTypes from "../../Components/Home/AppTypes";
import PersonalInfo from "../../Components/Home/PersonalInfo";
import Layout from "../../Layout";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import { Link } from "react-router-dom";
import OurClients from "../../Components/OurClients";
import FeaturedSlider from "../../Components/FeaturedSlider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import AppSlider from "../../Components/Home/AppSlider";

const Home = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const developmentItems = [
    {
      title: "Startups",
      icon: (
        <PanoramaFishEyeIcon
          sx={{
            fontSize: "20px",
            color: "#fff",
          }}
        />
      ),
      items: [
        "Startup App Development",
        "Startup Prototype",
        "E-Commerce Development",
      ],
    },
    {
      title: "SMB",
      icon: (
        <SquareOutlinedIcon
          sx={{
            fontSize: "20px",
            color: "#ffff",
          }}
        />
      ),
      items: [
        "Flutter App Development",
        "Mobile App Support",
        "Wearable App Development",
      ],
    },
    {
      title: "Enterprise",
      icon: (
        <ChangeHistoryIcon
          sx={{
            fontSize: "20px",
            color: "#ffff",
          }}
        />
      ),
      items: [
        "IT Staff Augmentation",
        "Blockchain Development",
        "IP Protection",
      ],
    },
  ];

  const expertise = [
    {
      title: "Healthcare",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Fintech",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Retail",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Real State",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Education",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Logistics",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "On-Demand",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Ecommerce",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Music",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
  ];

  const insights = [
    {
      text: "ASIM RAIS SIDDIQUI’S ARTICLE ON HOW ARTIFICIAL INTELLIGENCE DRIVES AUTOMATION & REDUCE COSTS IN RECRUITMENT INDUSTRY IS LIVE NOW ON HACKERNOON",
      date: "May 5, 2023",
    },
    {
      text: "TOP 10 FACIAL RECOGNITION APPS IN 2023",
      date: "May 3, 2022",
    },
    {
      text: "LISTING DOWN THE 13 APPS LIKE OMEGLE THAT YOU SHOULD CHECKOUT IN 2023",
      date: "March 5, 2021",
    },
    {
      text: "50 Game Development Ideas for Future Game Startups and Entrepreneurs",
      date: "February 1, 2023",
    },
    {
      text: "10 Offline Music Apps To Try in 2023",
      date: "December 1, 2021",
    },
    {
      text: "The 12 Best Image Recognition Apps That You Should Try In 2023",
      date: "March 4, 2021",
    },
  ];

  const primaryService = [
    {
      title: "Android App Development",
    },

    {
      title: "iOS App Development",
      marginLeft: 20,
    },

    {
      title: "Cross Platform App Development",
      marginLeft: 30,
    },

    {
      title: "Custom Software Development",
      marginLeft: 40,
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

  return (
    <>
      <Layout>
        <main data-aos="fade" className="home-main-container">
          <div data-aos="fade" className="container" style={{}}>
            <section data-aos="ease-in-sine" className="main-section">
              <HomeSilder />
              <div data-aos="fade-right" className="developmentListContainer">
                {developmentItems.map((v, i) => {
                  return (
                    <DevelopmentList
                      title={v.title}
                      icon={v.icon}
                      listItems={v.items}
                    />
                  );
                })}
              </div>
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

            <section
              data-aos="zoom-in"
              className="crafting-section main-section"
            >
              <div>
                <H2
                  color="#14ffff"
                  text={
                    "Creating return for money invested Driven Arrangements Right!"
                  }
                  dataText="ROI-Centric"
                />
                <P1
                  color="#ffff"
                  text={
                    "Get reliable mobile application development services created by a reputable mobile app development company supported by a team of highly qualified developers to create future-ready applications. We provide top-tier mobile application development services that are adapted to the aims and objectives of the stakeholders and possess expertise in native, cross-platform, and hybrid mobile app development. With a combination of digital, SaaS, and legacy technologies, we assist app development companies in innovating difficult application environments."
                  }
                />
              </div>
              <img
                data-aos="flip-left"
                src={require("../../Assets/calendar.webp")}
                alt=""
              />
            </section>
          </div>

          {/* Ahsan Code  */}
          {/* <div className="featured-container main-section" style={{ backgroundColor: "#023030" }}>
            <div className="container">
              <div data-aos='zoom-in'>
                <h1
                  onClick={() => {
                    navigate(`/services`);
                  }}
                  data-aos-offset="200"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                  style={{ color: "#14ffff", fontSize: 60 }}>Flutter App Development</h1>
              </div>

              <div data-aos='zoom-in'>
                <h1
                  onClick={() => {
                    navigate(`/solutions`);
                  }}
                  data-aos-offset="200"
                  data-aos-delay="400"
                  data-aos-duration="3000"
                  data-aos-easing="ease-in"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                  style={{ color: "#14ffff", fontSize: 60, marginLeft: 100 }}>Game App Development</h1>
              </div>

              <div data-aos='zoom-in'>
                <h1
                  data-aos-offset="200"
                  data-aos-delay="800"
                  data-aos-duration="4000"
                  data-aos-easing="ease-in"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                  style={{ color: "#14ffff", fontSize: 60, marginLeft: 200 }}>React Native  Development</h1>
              </div>

              <div data-aos='zoom-in'>
                <h1
                  data-aos-offset="200"
                  data-aos-delay="1000"
                  data-aos-duration="5000"
                  data-aos-easing="ease-in"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                  style={{ color: "#14ffff", fontSize: 60, marginLeft: 300 }}>Web Design Development</h1>
              </div>


            </div>
            <button className="white-button">Lets Work Together</button>
          </div> */}

          {/* <section className="primary-service-section main-section" style={{ backgroundColor: "#023030" }}>
            <H1 text={"Technology"} dataText="Technology" color="#ffff" center={true}  />
            <P2
                  text={"Appswaves develops next-gen mobile apps as well as websites for businesses that ensure market disruption, growth, and scalability."}
                  color="#fff"
                  center={true}
                />

            <div data-aos='zoom-in'>
              {primaryService.map((service, index) => {
                return (
                  <AppSlider
                    key={index}
                    title={service.title}
                    route={"services"}  
                  />
                );
              })}
            </div>
          </section> */}
          <div
            className="featured-container main-section"
            style={{ backgroundColor: "#fff", padding: 50 }}
          >
            <div data-aos="fade">
              <h1
                className="featured-heading"
                data-aos="slide-left"
                center={true}
                duration={2000}
                style={{ color: "#000", textAlign: "center" }}
              >
                Featured
              </h1>
              <h1
                className="featured-heading"
                data-aos="slide-right"
                duration={1500}
                style={{ color: "#14ffff", textAlign: "center" }}
              >
                Projects
              </h1>
            </div>
            <div data-aos="slide-right">
              <P2
                text={"Transforming product ideas into digital realities"}
                color="#000"
                center={true}
              />
            </div>

            <div data-aos="slide-left">
              <P2
                text={"with passion, innovation, and dedication"}
                color="#000"
                center={true}
              />
            </div>
          </div>
          <div data-aos="slide-right" className="estimation-section" style={{}}>
            <section
              data-aos="zoom-in-down"
              duration="2000"
              className=" main-section container"
            >
              <H2
                text={
                  "Assisting new app development companies to reach outstanding levels of custom app development"
                }
                dataText="Sustainability"
                color="#14ffff"
              />
              <div>
                <P1
                  text={
                    "We as a mobile app development company have transformed from a small startup to one of the most rapidly expanding digital transformation app design company that globally won the industry's most prestigious awards and been recognized in Forbes, Inc. Entrepreneur Media, and other top publications as an industry leader in mobile app development companies."
                  }
                  color="#ffffff"
                />
                <Link to={"/app-cost-calculator"}>
                  {" "}
                  <ButtonComp
                    text="Estimate Your Project's Cost"
                    color={"red"}
                  />
                </Link>
              </div>
            </section>
          </div>
          <div style={{}}>
            <div
              style={{
                zIndex: "2",
              }}
              className="container"
            >
              <section className="main-section">
                <H2
                  color={"#14ffff"}
                  text={"Case Studies"}
                  dataText="Our Portfolio"
                />
                <P1
                  color={"#fff"}
                  text={
                    "For a list of the completed and delivered projects for our clients in various endeavors, see the section below. The team of agile designers and project executives at Appswaves adopts projects and attends to the client's requirements according to a defined process. As a mobile app development company we emphasize strongly coordinating with your group for the major turn of events, our way of life is appropriately built to transmit a compensating experience for our design group and the client."
                  }
                />
              </section>
              <section data-aos="flip-left" className="AMJ-section">
                <H2 data-aos="zoom-in" text={"The Idea Behind Fitness App"} />
                <P1
                  data-aos="zoom-in"
                  text={
                    "The application needs to be highly adaptable, have a connecting point, and be less distracting for corporate workers who already find themselves in challenging circumstances. It needs to be emphasized that it is pressed and targeted at promoting well-being behaviors like getting sufficient rest, exercising, drinking enough water, eating well at breakfast, snacks, and dinner, and taking breaks from screens. As a mobile app development company, we carefully examined the target market, projected customers, and the entire scope of the project."
                  }
                />
                <img
                  data-aos="flip-left"
                  src={require("../../Assets/Fitness Img.png")}
                  alt=""
                />
              </section>

              {/* <PersonalInfo
                text={`“They love creating apps to help better the world, help better the society, so they immediately had a connection with my idea."`}
                name={"Andrea Eimers"}
                designation={"AMJ Wellness , Co-Founder & COO"}
                image={"amj_owner.png"}
              /> */}
              <section data-aos="fade-in" className="soundly-section">
                <div>
                  {/* <AppTypes data-aos='zoom-in' image={"soundly.png"} color={"#DA2024"} /> */}
                  <H2
                    text={"The Idea Behind the Soundly App"}
                    data-aos="fade-in"
                  />
                  <P1
                    data-aos="zoom-in"
                    text={
                      "The way that people listen to music has been transformed by Soundly. The Soundly app was developed to let listeners stream millions of songs from new artists through the app. You can save songs for later by making countless playlists, uploading your tracks, supporting your favorite artists, and taking advantage of how next-generation technology and music are combined in perfect harmony."
                    }
                  />
                  <P1
                    data-aos="zoom-out"
                    text={
                      "The concept was not only to create a ground-breaking entertainment app, but also to guarantee predictive, user-friendly, and smooth navigation and controls that would enable users to contribute their songs or quickly tap their way to their favorite songs by new artists."
                    }
                  />
                </div>
                <div data-aos="zoom-in" className="image-container">
                  <img
                    data-aos="zoom-in"
                    src={require("../../Assets/soundly_mobile.png")}
                    alt=""
                  />
                </div>
              </section>
              {/* <PersonalInfo
                text={`“We truly appreciate how much Appswaves cares about our project, from the beginning point to the deployment, they delivered everything efficiently."`}
                name={"Ethan Dobbins"}
                designation={"Soundly, CEO"}
                image={"soundly_ceo.png"}
              /> */}
              <section
                data-aos="zoom-in"
                style={{
                  backgroundColor: "#212529",
                  marginTop: "5%",
                }}
                className="soundly-section"
              >
                <div>
                  {/* <AppTypes image={"pure_plank_logo.png"} color={"#8EF08B"} /> */}
                  <H2
                    data-aos="zoom-in"
                    text={"The Idea Behind Pure Plank"}
                    color="#ffffff"
                  />
                  <P1
                    data-aos="zoom-in"
                    text={
                      "Plank is a website for fitness and exercise enthusiasts who want to maintain their health and work out at home. This platform gives a novel concept of life through challenges and video training. Appswaves has created several digital products, including mobile custom app development, for the healthcare and fitness businesses."
                    }
                    color="#ffffff"
                  />
                  <P1
                    data-aos="zoom-in"
                    text={
                      "The Plank app is a comprehensive solution for the planking workout that gives users access to all the features and capabilities they need in one location for the best results. The software also offered users the chance to purchase accessories with full payment integration possibilities, as well as video demonstrations and instructions."
                    }
                    color="#ffffff"
                  />
                </div>
                <div data-aos="fade-in" className="image-container">
                  <img
                    data-aos="zoom-in"
                    src={require("../../Assets/pure_plank.webp")}
                    alt=""
                  />
                </div>
              </section>
              {/* <PersonalInfo
                text={`“I had the pleasure of working with Appswaves on the development of our fitness app, and I am extremely impressed with the level of service they provided. Their team was incredibly knowledgeable, professional, and dedicated to ensuring that our app was developed to the highest standard."`}
                name={"Ari Marinovsky"}
                designation={"Pure Plank, CEO"}
                image={"pure_plank_ceo.jpeg"}
              /> */}
            </div>
          </div>

          <div data-aos='zoom-in' className="container">
            <section data-aos='zoom-in' className="main-section services-section">
              <div>
                <H2 data-aos='zoom-in'
                  color={'#14ffff'}
                  text={"Our Mobile App Development Company Domain Expertise"}
                  dataText="App Development"
                />
              </div>
              <div>
                <P1 data-aos='zoom-in'
                  color={'#ffff'}
                  text={"Workflows can be optimized, interoperability can be improved, appointment scheduling can be automated, and other features can be introduced to save doctors' and patients' time and improve the standard of treatment by creating healthcare applications and aiding businesses"}
                />
                <H4 data-aos='zoom-in' text={"Custom App Development"} />
                <p style={{ color: '#ffff' }} className="helper-p1" data-aos='zoom-in' >
                  {/* Our <span>custom software development</span> team onboards
                  versatile developers and technical personnel capable of
                  acknowledging your project’s custom requirements. */}
                  Our custom app development team utilizes versatile
                  developers and technical staff who can understand
                  the unique requirements of your project.

                </p>
                <H4 data-aos='zoom-in' text={"Mobile App Development Company"} />
                <p style={{ color: '#ffff' }} className="helper-p1" data-aos='zoom-in'>
                  {/* Craft the ideal product by redirecting your strategy in the
                  right direction. Start ahead with your
                  <span> Android application development</span> journey. With
                  your insights in mind, our collaborative sentiment will
                  continue to grow – building robust and custom applications for
                  you. */}
                  To provide the greatest mobile app solutions for customers,
                  Appswaves is a digital hub made up of self-driven dreamers and inventors.
                  All of our mobile projects go through an intensive development process
                  before being made available to users on the appropriate platform.
                </p>
                <H4 data-aos='zoom-in' text={"Top-Rated iOS App Development Services"} />
                <p style={{ color: '#ffff' }} className="helper-p1" data-aos='zoom-in'>
                  Hire iOS app developers from top-tier
                  <span> iOS app development company</span> to kick-start your
                  app entrepreneurial journey like never before!
                </p>
                <H4 data-aos='zoom-in' text={"Game Development"} />
                <p style={{ color: '#ffff' }} className="helper-p1" data-aos='zoom-in'>
                  <span>Hire game developers </span> who will create{" "}
                  <span> cross-platform game development </span> solutions that
                  engage, and captivate users to the fullest.
                </p>
              </div>
            </section>
          </div>
          <section
            data-aos="zoom-in"
            style={{
              backgroundColor: "#ffff",
            }}
            className="main-section expertise-section"
          >
            <div className="container" data-aos="zoom-in">
              <H2
                text={"Our Mobile App Design Company"}
                color="#000"
                dataText="Our Expertise"
                data-aos="zoom-in"
              />
              <H2
                text={"Can Turn Your Dream Into Reality"}
                data-aos="zoom-in"
              />
              <div className="expertise container" data-aos="zoom-in">
                <div className="expertiseList" data-aos="zoom-in">
                  {expertise.map((v, i) => {
                    return (
                      <H3
                        text={v.title}
                        pointer={true}
                        onClick={() => {
                          setActive(i);
                        }}
                      />
                    );
                  })}
                </div>
                <div className="expertiseDetails" data-aos="zoom-in">
                  <>
                    <p style={{ color: "#000" }}>
                      {expertise[active]?.description}
                    </p>
                    {expertise[active]?.details.map((detail, index) => {
                      return (
                        <>
                          <H4 color="#000" text={detail.heading} />
                          <P1 color="#000" text={detail.para} />
                        </>
                      );
                    })}
                  </>
                </div>
              </div>
            </div>
          </section>

          <section
            data-aos="zoom-in"
            className="main-section/ insights-section"
          >
            <div className="container" data-aos="zoom-out">
              <div className="insights-list" data-aos="zoom-out">
                <div>
                  {/* <H5 text={insights[0].text} />Cloud-Based Mobile Solutions Provided by a Mobile App Development Company */}

                  {/* <p>{insights[0].date}</p>
              <H5 text={insights[1].text} />
              <p>{insights[1].date}</p> */}
                  <H2
                    text={"Boosting Your Brand Through Innovative Mobile App Development Company"}
                  />
                  <P1
                    text={
                      "Regardless of the business community, Appswaves, concurs that businesses must embrace digitization. To do this, we use the most cutting-edge technologies for custom app development solutions"
                    }
                  />
                  <H2
                    text={"Our Mobile App Design Company Can Turn Your Dream Into Reality"}
                  />
                  <P1
                    text={
                      "A successful mobile app must have a strong mobile app design. As a Mobile app design company, we make sure that our skilled designers collaborate directly with our clients to develop attractive, intuitive, and effective mobile app interfaces that are both engaging and easy to use."
                    }
                  />
                  <P1
                    text={"The primary goal of our mobile app design company was to produce intuitive, aesthetically pleasing apps that would increase user pleasure and engagement. To strengthen your brand and improve brand recognition, we also make sure that the design is aligned with your brand identity and messaging."}
                  />

                  <H2
                    text={"A Mobile App Development Company  utilizes  AI and Machine Learning Algorithms"}
                  />
                  <P1
                    text={"We have incorporated AI and MLA into our business strategy to provide our customers with more complex and scalable digital solutions to stay on top of the changing trends.Mobile custom app development has been drastically changed by innovations in machine learning techniques. Our developers can access the machine-learning features of the device via the numerous APIs provided by the SDKs for Android and iOS. We improve custom app development services by leveraging sophisticated features and give users a smooth experience by utilizing the revolutionary technologies of AI and MLA. Since there is always space for improvement, Appswaves works to provide its clients with the best custom app development services possible so they can stay up with the fast-paced changes in the digital world "}
                  />
                  <H2
                    text={"Cloud-Based Mobile Solutions Provided by a Mobile App Development Company"}
                  />
                  <P1
                    text={"Our skilled mobile app developers deliver to our clients compact, reliable, and robust applications by utilizing the possibilities of SaaS (Software as a Service) These cloud-based applications enable easy connectivity with other applications and services, enabling app development companies to improve workflow and streamline operations. These firms consequently see an increase in conversions and customer retention. Being an app design company, we guarantee that our clients obtain the most modern and innovative custom app development services. We ensure that your data is protected from any breach with our cloud-based solutions by utilizing the sophisticated security measures and encryption that the cloud provides"}
                  />
                </div>
              </div>
              {/* <div>
            {insights.slice(3).map((v, i) => {
              console.log(v);
              return (
                <div className="insights-second-half">
                  <H5 text={v.text} />
                  <p>{v.date}</p>
                </div>
              );
            })}
          </div> */}
            </div>
          </section>



          {/* <FeaturedSlider /> */}
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
        </main>
      </Layout>
    </>
  );
};

export default Home;


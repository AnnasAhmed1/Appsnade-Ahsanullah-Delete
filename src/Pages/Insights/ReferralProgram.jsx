import React, { useRef } from "react";
import { H1, H2, H3, H4 } from "../../Helper/headings";
import { P1, P2 } from "../../Helper/paragraphs";
import "../../Styles/service.css";
import ServiceCard from "../../Components/Services/ServiceCard";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Layout from "../../Layout";
import ButtonComp from "../../Helper/button_comp";
import axios from "axios";
import OurClients from "../../Components/OurClients";
import FeaturedSlider from "../../Components/FeaturedSlider";
import { useParams } from "react-router-dom";
import GradeSharpIcon from "@mui/icons-material/GradeSharp";
import AwardsSlider from "../../Components/Home/AwardsSlider";
import "../../Styles/podcast.css";
import ReferralSlider from "../../Components/ReferralSlider";

const ReferralProgram = () => {
  const insightname = "Referral-Program";

  const episodes = [
    {
      title: "Innovating for a Greener Future | Federico Marques",
      details:
        " Things are only warming up in the new season of Technology for a Change. For our latest episode, we invited Federico Marques, founder and CEO of Moonflower Farms...",
    },
    {
      title: " Unpacking The Blockchain Revolution | Amalia Grochal",
      details:
        " To kick off the new season of Technology for a Change, we invited Amalia Irena Grochal, one of the pioneers in fintech in the Middle East...",
    },
    {
      title: ` The season finale of our podcast "Technology for a Change" is live now.`,
      details: " Tune in to see everything that went on this season",
    },
    {
      title: " Mr. Jeetu Kataria, the Co-Founder, and CEO",
      details:
        " Mr. Jeetu Kataria shared some interesting insights with our host, Mr. Hady Shaikh, about the DIFX trading platform, the future of your Bitcoin, patent and licensing struggles in...",
    },
    {
      title: " Our Flagship Podcast with Mr. Jeremy Thomas",
      details:
        " Mr. Jeremy Thomas, the Founder and CEO of Astral Tech has an interesting take on how technology and digital enablement can help the energy and utility sectors enhance operationa...",
    },
    {
      title: " AI in Digital Media with Kate Bradley Chernis",
      details: ` In the seventh episode of our podcast series, "Technology for a Change," our host and Principal Product Strategist, Mr. Hady Shaikh, has invited Ms. Kate Bradley Chernis, an AI-...`,
    },
    {
      title: " How to make Self-Believe your Superpower!",
      details:
        " Technology for a Change is back with its new episode of Season 3!. This time our host and Principal Product Strategist, Hady Shaikh, has invited Ms. Aaliya Rajah, a personal and...",
    },
    {
      title: " Small Businesses, Big Wins!",
      details:
        " In the 5th episode of #TechnologyForAChange, our Co-founder and CMO, Abeer Raza, sits down with Jeremy Harbour, Founder of Unity Group and Harbour Club...",
    },
    {
      title: " 8 Valuable Lessons from Joseph Landes",
      details:
        " In the fourth episode of “Technology for a Change,” Season 3, Hady Shaikh, the Principal Product Strategist at Appswaves, interviewed Joseph Landes, the Chief Revenue Officer and Chief Evangelist of Nerdio...",
    },
    {
      title:
        " Learn How Digital Transformation is the Next Big Thing in the GCC",
      details:
        " Listen to the discussion on technological affairs in the GCC in our latest podcast release...",
    },
    {
      title:
        " Cyberpsychologist Dr. Michael Nuccitelli Shares Ipredators Vision",
      details:
        " In our latest Technology for a Change episode, Season 3, Appswaves’s Principal Product Strategist...",
    },
    {
      title: " Discussing Tech In Dubai & GCC",
      details:
        " In the latest episode of Technology for a Change, Season 3, Appswaves’s Principal Product Strategist, Hady Shaikh, interviewed Yalla!Market’s founder, Leo Dovbenko....",
    },
    {
      title: " Featuring Rajat Mishra Co-Founder of Prezentium",
      details:
        " S02 E06 of Technology For Change - featuring Co-Founder of Prezentium, Rajat Mishra as we talk about....",
    },
    {
      title: " Featuring Rajat Mishra Co-Founder of Prezentium",
      details:
        " S02 E06 of Technology For Change - featuring Co-Founder of Prezentium, Rajat Mishra as we talk about....",
    },
    {
      title:
        " An Angel Investor the Founder of Uniqorn Incubator and Startup Super Cup",
      details:
        " On S02 E05, we've invited Dom Einhorn, the Founder of Uniqorn Incubator and Startup Super Cup.On S02 E05, we've invited Dom Einhorn, the Founder of Uniqorn Incubator and Startup Super Cup...",
    },
    {
      title: " Tim Kalinowski, Founder, and CEO of LORE",
      details:
        " Helping your business/product transform into a brand through communication, Appswaves partners with Tim Kalinowski, Founder, and CEO of LORE....",
    },
    {
      title: " Mr. Tyrone Johnson",
      details:
        " Engineering is one of the brightest educational fields that have a real-world physical impact on the lives of people...",
    },
    {
      title: " Mr. Hani Masgidi, Founder of Info Media Consultancy",
      details:
        " Discussing the topic “From necessity to global standards, how digital technology is reshaping businesses in the MENA region”...",
    },
    {
      title: " Managing Partner of Appswaves Daniel Burgess",
      details:
        " In Season 2 Episode#1 of Technology For Change, Managing Partner of Appswaves Daniel Burgess discusses the role of technology...",
    },
    {
      title:
        " How Can Technology Implementations Improve Educational Institution Processes?",
      details:
        " Appswaves's Managing Partner Daniel Burgess is joined by Lillian Row, a Baltimore County Board of Education member...",
    },
    {
      title: " What Does Automation Mean for a Business in The 21st century?",
      details:
        " In Episode 7, Appswaves’s Co-Founder and CMO Abeer Raza is joined by the Co-Founder of Remote New Media and Code Assembly, Mr.Paul McGillivray...",
    },
    {
      title: " How To Get Investors To Say “YES” To Your Startup!",
      details:
        " In episode #06, we are joined by the founder of Slidebean, Jose Caya, to discuss the importance of pitch decks to increase market excitement about your product...",
    },
    {
      title: " The Importance of Patents in Entrepreneurship",
      details:
        " In Episode 5, Abeer Raza sits with the president of American Patent Agency PC, Mr. Daniar Hussain, and Mr.Stephen Hou, a Patent Prosecution Advisor at APA PC...",
    },
    {
      title: " What Makes A Successful Entrepreneur From The Lens Of A Coach",
      details:
        " In episode #04, Appswaves Co-Founder Abeer Raza sits with Michelle Law, a business consultant with over a decade of experience of coaching entrepreneurs...",
    },
    {
      title:
        " The story of Guardian Angel – A lesson in saving lives using a mobile app for entrepreneurs",
      details:
        " In Episode #03 our host was Mr. JR Ridge, actor, producer, and the entrepreneur who founded Guardian Angel discusses the hardship of starting a business from scratch with no investment...",
    },
    {
      title:
        " How Businesses Are Using Technology To Evolve During Covid-19 and The Role of Tech In The Future of Entrepreneurship",
      details:
        " In Episode #02, Mr. Gene Deems, the eGov and services manager from the department of natural resources joined us who discusses the evolution of technology...",
    },
    {
      title:
        " How Steve Built A Successful Business While Saving Lives Through The Veteran App",
      details:
        " In episode #01, we sat with the founder of “The Veteran App” to discuss the role of technology in saving lives and creating positive impact in the world...",
    },
  ];

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
                text={"The Highest Paying App Development Referral Program"}
                dataText="Refferal"
                color={"#14ffff"}
              />
              <P1
                text={
                  "By becoming our partner in our referral program, you can gain incredible commissions on a consistent basis."
                }
                color={"#fff"}
              />
              <H4 text={"Our Last Referral Partner Earned"} color={"#14ffff"} />
              <P1
                text={"He Joined The Program Just 15 Days Ago!"}
                color={"#fff"}
              />
            </div>
            <div>
              <img
                style={{
                  width: "85%",
                  marginLeft: "auto",
                  display: "block",
                }}
                src={require("../../Assets/refferal_head_img.png")}
                alt=""
              />
            </div>
          </section>
          <FeaturedSlider />
        </div>
        <div className="estimation-section">
          <section
            style={{
              alignItems: "center",
            }}
            className=" main-section container"
          >
            <div>
              <H2
                text={
                  "Sign Up Now & Earn As Much Money As Our Consistent Referral Partners"
                }
                color="#ffffff"
              />
              <P1
                text={
                  "Our App Development Referral Program Has An Incredible Amount of Incentives:"
                }
                color="#ffffff"
              />
              <ul
                style={{
                  color: "#ffffff",
                }}
                className="helper-p1"
              >
                <li> Earn Up To 25%* In Commissions</li>
                <li>Top Partners Can Earn Even More & Get Dedicated Support</li>
                <li>Account Managers Guide You In Securing More Conversions</li>
              </ul>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/referral_partner.png")}
                alt=""
              />
            </div>
          </section>
        </div>
        <section className="main-section container consultation-section">
          <div>
            <H2
              color="#14ffff"
              text={
                "Appswaves’s Referral Partners Earn Incredible Rewards & Get Major Incentives"
              }
              dataText="Rewards"
            />
            <P1
              color="#ffffff"
              text={
                "Subscribe with Us Via Your Email So That You Don’t Miss Out On An Once In a Lifetime Events!"
              }
            />
          </div>
          <div></div>
        </section>
        <section className="main-section container">
          <ReferralSlider />
        </section>
        <div
          style={{
            background: "transparent",
          }}
          className="estimation-section"
        >
          <section className=" main-section container">
            <div>
              <H2 text={"Why Promote Appswaves’s Services?"} color="#14ffff" />
              <P1
                color="#ffffff"
                text={
                  "Our referral partners are already earning thousands of dollars each month by just sending us leads that get converted. Jump in on this incredibly lucrative bandwagon today!"
                }
              />
              <ul className="helper-p1" style={{ color: "#ffffff" }}>
                <li>Award Winning App Development Services</li>
                <li>Incredible Client/Lead Conversion Rates</li>
                <li>Higher, Bigger and Better Commissions</li>
                <li>Almost Immediate Payouts</li>
                <li>Wide Range Of Service</li>
              </ul>
            </div>

            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/promote_referral.png")}
                alt=""
              />
            </div>
          </section>
          {/* <section className="awards-section main-section container">
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
          <div className="container">
            <AwardsSlider />
          </div>
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

export default ReferralProgram;

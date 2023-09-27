import React, { useRef, useState } from "react";
import {
  MobileOutlined,
  AppleOutlined,
  AndroidOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "../../Styles/AppCostCalculator.css";
import GradientButton from "../../Helper/GradientButton";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../Axois";
import axios from "axios";
import NavOnlyLogo from "../../Components/navOnlyLogo";
const AppCostCalculator = () => {
  const formRef = useRef(null);
  const [activeSection, setActiveSection] = useState(1);
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState();
  const [selectedProjectType, setSelectedProjectType] = useState();
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const platforms = [
    { icon: <AndroidOutlined />, title: "Android App", id: "android" },
    { icon: <AppleOutlined />, title: "iOS App", id: "ios" },
    { icon: <MobileOutlined />, title: "Both", id: "both" },
  ];
  const type = [
    { image: "cart_icon", title: "E-commerce", id: "ecommerce" },
    { image: "social_icon", title: "Social Media", id: "social_media" },
    { image: "booking_icon", title: "Booking", id: "booking" },
    { image: "cab_icon", title: "Cab App", id: "cab_app" },
    { image: "custom_app_icon", title: "Food", id: "food" },
    { image: "custom_app_icon", title: "Custom App", id: "custom_app" },
  ];
  const questions = [
    {
      question: "How would you like your users to sign-up?",

      options: [
        { title: "Email", id: "email" },
        { title: "Social Media", id: "social_media" },
        { title: "Phone Number", id: "phone_number" },
      ],
    },
    {
      question: "Would you like order tracking in your app?",

      options: [
        { title: "Yes", id: "order_tracking_yes" },
        { title: "No", id: "order_tracking_no" },
      ],
    },
    {
      question: "Would you allow others to sell their products on your app?",

      options: [
        { title: "Yes", id: "sell_products_yes" },
        { title: "No", id: "sell_products_no" },
      ],
    },
    {
      question:
        "How should your customers communicate with app administrators?",

      options: [
        { title: "Simple Inbox", id: "simple_inbox" },
        { title: "Live Chat", id: "live_chat" },
      ],
    },
    {
      question: "Do you want a payment gateway integration?",

      options: [
        { title: "Yes", id: "payment_gateway_yes" },
        { title: "No", id: "payment_gateway_no" },
      ],
    },
    {
      question: "Do you need Admin panel to manage your App?",

      options: [
        { title: "Yes", id: "admin_panel_yes" },
        { title: "No", id: "admin_panel_no" },
      ],
    },
    {
      question: "What other features would you like to have in your app?",
      options: [
        { title: "Reviews or Rating", id: "review_rating" },
        { title: "Search Bar", id: "search_bar" },
        { title: "Push Notification", id: "push_notification" },
        { title: "Shipping API", id: "shopping_api" },
      ],
    },
  ];
  function scrollToSection(e) {
    const id = activeSection + 1;
    e.preventDefault();
    const element = document.querySelector(`#section-${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(activeSection + 1);
  }
  function scrollBackToSection(e) {
    const id = activeSection - 1;
    e.preventDefault();
    const element = document.querySelector(`#section-${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(activeSection - 1);
  }

  const initialObj = {
    platform: selectedPlatform,
    projectType: selectedProjectType,
  };

  const questionObj = selectedQuestions.reduce((acc, item, index) => {
    acc[`question${index + 1}`] = item.question;
    acc[`answer${index + 1}`] = item.answer;
    return acc;
  }, {});

  const objToSend = {
    ...initialObj,
    ...questionObj,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      platform: selectedPlatform,
      projectType: selectedProjectType,
      questions: selectedQuestions,
    };
    navigate("/register", { state: obj });

    // axios
    //   .post(
    //     "https://sheet.best/api/sheets/64a870e1-2c9e-4020-9234-c70b3a11c56a",
    //     {
    //       platform: selectedPlatform,
    //       projectType: selectedProjectType,
    //       questions: selectedQuestions,
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <main
      style={{
        overflow: "hidden",
        height: "100vh",
      }}
      className="container app-cost-calculator-main"
    >
      <NavOnlyLogo />
      <div className="fixed-container">
        <section id="section-1" className="calculator-section">
          <h1
            style={{
              textAlign: "center",
            }}
            className=""
          >
            Choose the desired platform
          </h1>
          <div>
            {platforms.map((platform, index) => {
              return (
                <label className="card-label" for={platform.id}>
                  <input
                    type="radio"
                    id={platform.id}
                    name={"platform"}
                    value={platform.id}
                    onChange={(e) => {
                      setSelectedPlatform(platform.id);
                      console.log(e.target.value);
                    }}
                  />
                  {platform.icon}
                  <h2>{platform.title}</h2>
                </label>
              );
            })}
          </div>
          <div className="buttons-container">
            <GradientButton
              text="Next"
              transparent={false}
              onClick={selectedPlatform ? (e) => scrollToSection(e) : null}
            />
          </div>
        </section>
        <section id="section-2" className="calculator-section">
          <h1
            style={{
              marginTop: "35px",
            }}
            className=""
          >
            Choose the desired platform
          </h1>
          <div
            style={{
              marginTop: "15px",
              marginBottom: "0px",
            }}
          >
            {type.map((type, index) => {
              return (
                <label className="card-label" for={type.id}>
                  <input
                    type="radio"
                    id={type.id}
                    name={"type"}
                    value={type.id}
                    onChange={(e) => {
                      setSelectedProjectType(type.id);
                      console.log(e.target.value);
                    }}
                  />
                  <img src={require(`../../Assets/${type.image}.png`)} alt="" />{" "}
                  {type.icon}
                  <h2>{type.title}</h2>
                </label>
              );
            })}
          </div>
          <div className="buttons-container">
            <p onClick={(e) => scrollBackToSection(e)}>
              <KeyboardBackspaceSharpIcon fontSize="30px" />
              BACK
            </p>

            <GradientButton
              text="Next"
              transparent={false}
              onClick={selectedProjectType ? (e) => scrollToSection(e) : null}
            />
          </div>
        </section>
        {questions.map((question, index) => {
          let selectedOption = "";

          return (
            <section
              id={`section-${index + 3}`}
              className="calculator-section main-section1"
            >
              <p className="question-number">
                <span>{index + 1}</span>/{questions.length}
              </p>
              <h1 className="">{question.question}</h1>
              <div
                style={{
                  display: "block",
                  width: "30%",
                }}
              >
                {question.options.map((option, index) => {
                  return (
                    <label
                      className="card-label card-label-question"
                      for={option.id}
                    >
                      <input
                        type="radio"
                        id={option.id}
                        name={question}
                        value={option.id}
                        onChange={(e) => {
                          selectedOption = option.id;
                        }}
                      />
                      <p className="question-option">{option.title}</p>
                    </label>
                  );
                })}
              </div>
              <div className="buttons-container">
                <p onClick={(e) => scrollBackToSection(e)}>
                  <KeyboardBackspaceSharpIcon fontSize="30px" />
                  BACK
                </p>

                <GradientButton
                  text={index != questions.length - 1 ? "Next" : "Finish"}
                  transparent={false}
                  onClick={(e) => {
                    setSelectedQuestions([
                      ...selectedQuestions,
                      {
                        question: question.question,
                        answer: selectedOption,
                      },
                    ]);
                    if (index === questions.length - 1) {
                      handleSubmit(e);
                    } else {
                      scrollToSection(e);
                    }
                  }}
                />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default AppCostCalculator;

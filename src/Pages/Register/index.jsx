import React, { useEffect } from "react";
import { P1 } from "../../Helper/paragraphs";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GradientButton from "../../Helper/GradientButton";
import "../../Styles/register.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import NavOnlyLogo from "../../Components/navOnlyLogo";

const Register = () => {

  const location = useLocation();
  useEffect(() => {
    document.title = `Appswaves ${location.pathname.replace("/", "")}`;
  }, [location]);
  const navigate = useNavigate();
  const receivedValue = location.state;
  let email;
  let projectName;
  let phoneNumber;
  let name;
  console.log(receivedValue);

  return (
    <main className="register-main container main-section">
      {/* <NavOnlyLogo /> */}
      <section>
        <img src={require("../../Assets/register_img.gif")} alt="" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const objtoSend = {
              projectName,
              phone: phoneNumber,
              name,
              email,
              ...receivedValue,
            };
            console.log(objtoSend);
            axios
              .post(
                "https://sheet.best/api/sheets/64a870e1-2c9e-4020-9234-c70b3a11c56a",
                objtoSend
              )
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
            navigate("/");
          }}
          action=""
        >
          <h2 className="heading">You are almost there...</h2>
          <P1
            text={
              "Please fill out this short form and you will immediately get a detailed estimate."
            }
          />
          <FormControl variant="standard">
            <InputLabel htmlFor="project_name">PROJECT NAME</InputLabel>
            <Input
              id="project_name"
              placeholder="YOUR PROJECT NAME"
              required
              onChange={(e) => {
                projectName = e.target.value;
              }}
              startAdornment={
                <InputAdornment position="start">
                  {/* <AccountCircle /> */}
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="your_name">YOUR NAME</InputLabel>
            <Input
              id="your_name"
              placeholder="YOUR NAME"
              required
              onChange={(e) => {
                name = e.target.value;
              }}
              startAdornment={
                <InputAdornment position="start">
                  {/* <AccountCircle /> */}
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="your_email">YOUR EMAIL</InputLabel>
            <Input
              id="your_email"
              placeholder="YOUR EMAIL"
              required
              onChange={(e) => {
                email = e.target.value;
              }}
              startAdornment={
                <InputAdornment position="start">
                  {/* <AccountCircle /> */}
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="phone_number">YOUR PHONE NUMBER</InputLabel>
            <Input
              id="phone_number"
              placeholder="YOUR PHONE NUMBER"
              required
              onChange={(e) => {
                phoneNumber = e.target.value;
              }}
              startAdornment={
                <InputAdornment position="start">
                  {/* <AccountCircle /> */}
                </InputAdornment>
              }
            />
          </FormControl>
          <GradientButton text="GET THE ESTIMATE" transparent={false} />
        </form>
      </section>
    </main>
  );
};

export default Register;

import axios from "axios";
import React from "react";

const DetailsForm = ({ route, subRoute }) => {
  let fullName = "";
  let email = "";
  let number = "";
  let description = "";
  const handleSubmit = (e) => {
    console.log("formsubmit");
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/e9fcbac4-660b-4b51-8993-168237931e1c",
        {
          mainRoute: "services",
          subRoute: "servicename",
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
  return (
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
        <input type="checkbox" id="demoCheckbox" name="checkbox" value="1" />
        <label htmlFor="">Share Non Disclosure Agreement</label>
      </p>
      <button className="square-button">Let's Connect</button>
    </form>
  );
};

export default DetailsForm;

import React, { useEffect, useState } from "react";
import { H1, H2, H3, H4 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import "../../Styles/service.css";
import ServiceCard from "../../Components/Services/ServiceCard";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Layout from "../../Layout";
import ButtonComp from "../../Helper/button_comp";
import axios from "axios";
import OurClients from "../../Components/OurClients";
import FeaturedSlider from "../../Components/FeaturedSlider";
import { useLocation, useParams } from "react-router-dom";
import GradeSharpIcon from "@mui/icons-material/GradeSharp";
import AwardsSlider from "../../Components/Home/AwardsSlider";
import CurrencyInput from "react-currency-input-field";
import { MenuItem, Select } from "@mui/material";

function isNumber(str) {
  
  if (str.trim() === "") {
    return false;
  }

  return !isNaN(str);
}

const Payment = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Appswaves ${location.pathname.replace("/", "")}`;
  }, [location]);
  const insightname = "Payment ";
  const [value, setValue] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setDesc({ textAreaValue: event.target.value });
  };
  const [currency, setCurrency] = React.useState("");

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Layout>
      <main className="services-main-container" style={{}}>
        <div className="container">
          <section className="consultation-section">
            <div>
              <div
                style={{
                  marginBottom: "40px",
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
            </div>
          </section>
          <img src={require("../../Assets/stripe.png")} alt="" />
          {/* <section className="consultation-section">
            <div>
              <H1
                text="The benefits of online payments"
                dataText="Mission"
                color="#14ffff"
              />

              <ul className="helper-p1" style={{ color: "#fff" }}>
                <li> Faster payments & improved cash</li>
                <li> Security</li>
                <li> Automatic payment matching</li>
                <li> Boost your sales.</li>
              </ul>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../../Assets/masterCard.jpg")}
                alt=""
              />
            </div>
          </section> */}

          <section className="consultation-section">
            <div style={{ marginTop: 30 }}>
              <h3 style={{ color: "#ffff" }}>Amount</h3>
              <input
                type="number"
                placeholder="Your Amount"
                value={value}
                onChange={handleChange}
                style={{ width: "100%", height: 50, padding: 20 }}
              />
            </div>

            <div style={{ marginTop: 30 }}>
              <h3 style={{ color: "#ffff" }}>Currency</h3>
              <select
                style={{
                  width: "100%",
                  height: 50,
                  padding: 10,
                  background: "transparent",
                }}
              >
                <option>USD</option>
                <option>EUR</option>
                <option>PKR</option>
              </select>
              {/* <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value={"USD"}
                inputProps={{ "aria-label": "Without label" }}
                displayEmpty
                value={currency}
                label="currency"
                onChange={handleChangeCurrency}
                style={{
                  width: "100%",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem>USD</MenuItem>
                <MenuItem>EUR</MenuItem>
                <MenuItem>PKR</MenuItem>
              </Select> */}
              {/* <CurrencyInput
                id="input-example"
                name="input-name"
                prefix="£"
                intlConfig={{ locale: "en-US", currency: "GBP" }}
                placeholder="Please enter country"
                defaultValue={1000}
                decimalsLimit={2}
                onValueChange={(value, name) => console.log(value, name)}
                style={{ width: "100%", height: 50, padding: 20 }}
              /> */}
            </div>
          </section>
          <div style={{ marginTop: 20 }}>
            <h3 style={{ color: "#ffff" }}>Descrption</h3>
            <input
              type="textarea"
              placeholder="Your Description"
              onChange={handleChange2}
              style={{ width: "100%", height: 100, padding: 20 }}
            />
          </div>
          <div>
            {/* <h1 style={{ color: "#ffff", marginTop: 30, textAlign: "center" }}>
              Payment geteway
            </h1> */}
            <a
              href="https://buy.stripe.com/test_eVa6sv6mMeiL1cAcMM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  paddingRight: 80,
                  paddingLeft: 80,
                  height: 40,
                  backgroundColor: "#14ffff",
                  borderWidth: 4,
                  borderColor: "#fff",
                  borderRadius: 30,
                  marginTop: 20,
                  marginLeft: "40%",
                }}
              >
                Pay With Stripe
              </button>
            </a>
          </div>
        </div>
        <br />
        <br />
      </main>
    </Layout>
  );
};

export default Payment;

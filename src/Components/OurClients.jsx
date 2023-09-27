import React from "react";
import { H2 } from "../Helper/headings";
import { P1 } from "../Helper/paragraphs";

const OurClients = ({ imagesArr = [] }) => {
  return (
    <section
      style={{
        backgroundColor: "#f8f8fb",
      }}
      className="main-section clients-section"
    >
      <div className="container">
        <H2 text={"Our Clients"} dataText="Clientele" />
        <P1
          text={
            "We contribute to these partnership programs, supported by global technology experts. Partnering with industry leaders, we offer quality technology solutions that meet your business needs."
          }
        />
        <div className="clients-grid">
          {imagesArr.map((image, i) => {
            return (
              <div className="card-animation">
                <img src={require(`../Assets/${image}`)} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurClients;

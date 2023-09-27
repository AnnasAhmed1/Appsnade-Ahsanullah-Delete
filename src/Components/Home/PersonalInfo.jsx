import React from "react";
import { P1 } from "../../Helper/paragraphs";
import EastSharpIcon from "@mui/icons-material/EastSharp";

const PersonalInfo = ({ image, name, designation, text }) => {
  return (
    <section className="info-section main-section">
      <P1 text={text} />
      <div className="personal-info">
        <div>
          <img src={require(`../../Assets/${image}`)} alt={name} />
          <div>
            <h6>{name}</h6>
            <p>{designation}</p>
          </div>
        </div>
        <div className="">
          <p>FULL CASE STUDY</p>
          <EastSharpIcon />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;

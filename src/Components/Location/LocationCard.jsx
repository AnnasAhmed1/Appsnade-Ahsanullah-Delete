import React from "react";
import { H4 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import "../../Styles/component.css";
import { useNavigate } from "react-router-dom";

const LocationCard = ({ route, title, description,description2 }) => {
  const navigate = useNavigate();

  return (
    <div
      // onClick={() => {
      //   navigate(`/${route}/${title?.replace((/ /g, `-`))}`);
      // }}
      className="service-card"
    >
      <H4 text={title} />
      <li>{description}</li>
      <li>{description2}</li>
      <EastSharpIcon />
     
    </div>
  );
};

export default LocationCard;

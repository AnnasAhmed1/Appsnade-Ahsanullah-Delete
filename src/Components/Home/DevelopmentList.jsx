import React from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
const DevelopmentList = ({ title, listItems, icon }) => {
  return (
    <div className="developmentList">
      <h4 style={{color:'#fff'}}>
        {icon}
        {title}
      </h4>
      <ul>
        {listItems?.map((item, index) => {
          return <li key={index} style={{color:'#fff'}}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default DevelopmentList;

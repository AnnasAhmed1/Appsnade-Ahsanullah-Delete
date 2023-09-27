import React from "react";
import { useNavigate } from "react-router-dom";

const GradientButton = ({
  text = "",
  onClick = () => {},
  transparent = true,
  center = false,
}) => {
  return (
    <button
      style={{
        margin: center ? "0 auto" : null,
      }}
      className={`gradientButton ${transparent ? "transparent" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GradientButton;

import React from "react";

const ColoredHeading = ({
  text,
  coloredText,
  reverse = false,
  dataText = "",
}) => {
  return (
    <h1
      style={{ color: "#fff" }}
      // data-text={dataText}
      className="coloredHeading"
    >
      {!reverse ? text : null}
      <span>{" " + coloredText + " "}</span>
      {reverse ? text : null}
    </h1>
  );
};

export default ColoredHeading;

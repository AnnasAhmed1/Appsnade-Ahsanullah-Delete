import React from "react";

const AppTypes = ({ image, color, margin = "30px" }) => {
  return (
    <div className="app-types">
      <img
        style={{
          marginRight:margin,
        }}
        className=""
        src={require(`../../Assets/${image}`)}
        alt=""
      />
      <div>
        <p
          style={{
            color: color,
          }}
        >
          IOS APP
        </p>
        <p
          style={{
            color: color,
          }}
        >
          Android APP
        </p>
        <p
          style={{
            color: color,
          }}
        >
          Web APP
        </p>
      </div>
    </div>
  );
};

export default AppTypes;

import "animate.css";
export const H1 = ({
  text,
  color = false,
  center = false,
  dataText = "",
  style = {},
}) => {
  return (
    <h1
      // data-text={dataText}
      style={{
        color: color ? color : null,
        textAlign: center ? "center" : null,
        style,
      }}
      className="helper-h1"
    >
      {text}
    </h1>
  );
};
export const H2 = ({ text, color = false, center = false, dataText = "" }) => {
  return (
    <h2
      // data-text={dataText}
      style={{
        color: color ? color : null,
        textAlign: center ? "center" : null,
      }}
      className="helper-h2 animate__animated"
    >
      {text}
    </h2>
  );
};

export const H3 = ({
  text,
  color = false,
  pointer = false,
  onClick = () => {},
  dataText = "",
}) => {
  return (
    <h3
      // data-text={dataText}
      onClick={onClick}
      style={{
        color: color ? color : null,
        cursor: pointer ? pointer : null,
      }}
      className="helper-h3"
    >
      {text}
    </h3>
  );
};
export const H4 = ({ text, color = false, dataText = "" }) => {
  return (
    <h4
      // data-text={dataText}
      style={{
        color: color ? color : null,
      }}
      className="helper-h4"
    >
      {text}
    </h4>
  );
};
export const H5 = ({ text, color = false, dataText = "" }) => {
  return (
    <h5
      // data-text={dataText}
      style={{
        color: color ? color : null,
      }}
      className="helper-h5"
    >
      {text}
    </h5>
  );
};

import React from "react";

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

export default function Footer() {
    return (
      <div style={style}>
        <a href='https://github.com/jooreea' className = "m-3" target="blank">github</a>
        <a href='https://www.linkedin.com/in/jooree-ahn-289382212/' className = "m-3" target="blank">linkedin</a>
      </div>
    );
  }
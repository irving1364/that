import React from "react";
import styled from "@emotion/styled";
const Link = styled.a({
  cursor: "pointer",
  backdropFilter: " blur(5px)",
  borderRadius: 50,
  color: "white",
  textTransform: "uppercase",
  letterSpacing: " 0.1em",
  fontSize: "11px",
    width: "auto",
  backgroundColor:  'rgba(255,255,255,0.1)',
  padding: "1.2vh 2vh",
  border: "solid 1px white",
  textDecoration: "none",
  transition: "all 0.4s",
  ":hover": {
    paddingLeft: 30,
    "& > div": {
      transform: "scale(1)",
    },
  },
});

const Dot = styled.div({
  width: 8,
  height: 8,
  borderRadius: 200,
  backgroundColor: "white",
  marginLeft: 8,
  position: "absolute",
  left: 0,
  marginTop: 3,
  transform: "scale(0)",
  transition: "all 0.3s",
});
const LightButton = ({ children }) => {
  return (
    <>
      <Link>
        <Dot />
        {children}
      </Link>
    </>
  );
};
export default LightButton;
import React from "react";
import styled from "@emotion/styled";
const Link = styled.a({
  cursor: "pointer",
  backdropFilter: " blur(4px)",
  borderRadius: 50,
  color: "black",
  textTransform: "uppercase",
  letterSpacing: " 0.1em",
  fontSize: "11px",
  width: "auto",
  padding: "1.5vh 2vh",
  border: "solid 1px black",
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
  backgroundColor: "black",
  marginLeft: 8,
  position: "absolute",
  left: 0,
  marginTop: 3,
  transform: "scale(0)",
  transition: "all 0.3s",
});
const BlackButton = ({ children }) => {
  return (
    <>
      <Link>
        <Dot />
        {children}
      </Link>
    </>
  );
};
export default BlackButton;

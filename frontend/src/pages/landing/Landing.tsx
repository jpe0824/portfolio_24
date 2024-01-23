import React from "react";
import "./Landing.css";
import { styled } from "@mui/system";
// import { Link } from "react-scroll";
import { DownArrowButton } from "../../components/Buttons";

const StyledName = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

function Landing() {
  return (
    <div className="title-container">
      <h1 className="name">
        <div>
          Hi! I'm <StyledName>Jason</StyledName>,
        </div>
        <div>Software Engineer,</div>
        <div className="container-flip">
          <span className="flip">Husband & Father</span>
          <span className="flip">Student</span>
          <span className="flip">Lego Builder</span>
          <span className="flip">Fitness Enthusiast</span>
          <span className="flip">Lakers Fan</span>
          <span className="flip">Tinkerer</span>
          <span className="flip">Tech Enthusiast</span>
          <span className="flip">Dodgers Fan</span>
        </div>
      </h1>
      <DownArrowButton page="about" direction="down" />
    </div>
  );
}

export default Landing;

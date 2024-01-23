import React from "react";
import "./Landing.css";
import { styled } from "@mui/system";
// import { Link } from "react-scroll";
import { DownArrowButton } from "../../components/Buttons";
import { Box, Typography } from "@mui/material";

const StyledName = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

function Landing() {
  return (
    <Box className="title-container">
      <Typography variant="h2" className="name">
        <Box>
          Hi! I'm <StyledName>Jason</StyledName>,
        </Box>
        <Box>Software Engineer,</Box>
        <Box className="container-flip">
          <span className="flip">Husband & Father</span>
          <span className="flip">Student</span>
          <span className="flip">Lego Builder</span>
          <span className="flip">Fitness Enthusiast</span>
          <span className="flip">Lakers Fan</span>
          <span className="flip">Tinkerer</span>
          <span className="flip">Tech Enthusiast</span>
          <span className="flip">Dodgers Fan</span>
        </Box>
      </Typography>
      <DownArrowButton page="about" direction="down" />
    </Box>
  );
}

export default Landing;

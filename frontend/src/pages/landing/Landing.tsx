import React from "react";
import "./Landing.css";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";

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
      <IconButton
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          ":hover": {
            "& .MuiSvgIcon-root": {
              color: "secondary.main", // Use the secondary color from the theme
            },
          },
        }}
        aria-label="scroll down"
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 84 }} color="primary" />
      </IconButton>
    </div>
  );
}

export default Landing;

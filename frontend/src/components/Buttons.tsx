import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

interface Props {
  page: string;
  direction: "up" | "down";
}

const UpArrowButton = ({ page }: Props) => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        top: 0,
        padding: 0,
        left: "50%",
        transform: "translateX(-50%)",
        ":hover": {
          "& .MuiSvgIcon-root": {
            color: "secondary.main", // Use the secondary color from the theme
          },
        },
      }}
      aria-label="scroll up"
    >
      <Link to={page}>
        <KeyboardArrowUpIcon sx={{ fontSize: "3rem" }} color="primary" />
      </Link>
    </IconButton>
  );
};

const DownArrowButton = ({ page }: Props) => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        bottom: 0,
        padding: 0,
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
      <Link to={page}>
        <KeyboardArrowDownIcon sx={{ fontSize: "3rem" }} color="primary" />
      </Link>
    </IconButton>
  );
};

export { UpArrowButton, DownArrowButton };

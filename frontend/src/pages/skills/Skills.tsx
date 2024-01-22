import "./Skills.css";
import {
  DownArrowButton,
  UpArrowButton,
} from "../../components/buttons/Buttons";
import styles from "../../styles/styles";
import { Box } from "@mui/material";

function Skills() {
  return (
    <div>
      <UpArrowButton page="/about" direction="up" />
      <h1 style={styles.title}>Skills</h1>
      <Box sx={styles.pageContainer}>
        
      </Box>
      <DownArrowButton page="/portfolio" direction="down" />
    </div>
  );
}

export default Skills;

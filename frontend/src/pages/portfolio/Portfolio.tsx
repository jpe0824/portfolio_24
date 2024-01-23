import { Box, Typography } from "@mui/material";
import { DownArrowButton, UpArrowButton } from "../../components/Buttons";
import styles from "../../styles/styles";

function Portfolio() {
  return (
    <Box>
      <UpArrowButton page="/skills" direction="up" />
      <Typography variant="h2" style={styles.title}>Portfolio</Typography>
      <DownArrowButton page="/contact" direction="down" />
    </Box>
  );
}

export default Portfolio;

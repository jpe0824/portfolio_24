import { Box, Typography } from "@mui/material";
import { DownArrowButton, UpArrowButton } from "../../components/Buttons";
import styles from "../../styles/styles";

function Resume() {
  return (
    <Box>
      <UpArrowButton page="/contact" direction="up" />
      <Typography variant="h2" style={styles.title}>
        Resume
      </Typography>
      <DownArrowButton page="/" direction="down" />
    </Box>
  );
}

export default Resume;

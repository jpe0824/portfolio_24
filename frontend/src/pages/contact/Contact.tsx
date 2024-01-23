import { Box, Typography } from "@mui/material";
import { DownArrowButton, UpArrowButton } from "../../components/Buttons";
import styles from "../../styles/styles";

function Contact() {
  return (
    <Box>
      <UpArrowButton page="/portfolio" direction="up" />
      <Typography variant="h2" style={styles.title}>Contact</Typography>
      <DownArrowButton page="/resume" direction="down" />
    </Box>
  );
}

export default Contact;

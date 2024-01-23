import { DownArrowButton, UpArrowButton } from "../../components/Buttons";
import styles from "../../styles/styles";

function Contact() {
  return (
    <div>
      <UpArrowButton page="/portfolio" direction="up" />
      <h1 style={styles.title}>Contact</h1>
      <DownArrowButton page="/resume" direction="down" />
    </div>
  );
}

export default Contact;

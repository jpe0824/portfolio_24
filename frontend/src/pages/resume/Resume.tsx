import "./Resume.css";
import {
  DownArrowButton,
  UpArrowButton,
} from "../../components/buttons/Buttons";
import styles from "../../styles/styles";

function Resume() {
  return (
    <div>
      <UpArrowButton page="/contact" direction="up" />
      <h1 style={styles.title}>Resume</h1>
      <DownArrowButton page="/" direction="down" />
    </div>
  );
}

export default Resume;

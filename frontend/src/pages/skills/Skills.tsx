import "./Skills.css";
import {
  DownArrowButton,
  UpArrowButton,
} from "../../components/buttons/Buttons";
import styles from "../../styles/styles";

function Skills() {
  return (
    <div>
      <UpArrowButton page="/about" direction="up" />
      <h1 style={styles.title}>Skills</h1>
      <DownArrowButton page="/portfolio" direction="down" />
    </div>
  );
}

export default Skills;

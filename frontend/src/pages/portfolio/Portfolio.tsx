import { DownArrowButton, UpArrowButton } from "../../components/Buttons";
import styles from "../../styles/styles";

function Portfolio() {
  return (
    <div>
      <UpArrowButton page="/skills" direction="up" />
      <h1 style={styles.title}>Portfolio</h1>
      <DownArrowButton page="/contact" direction="down" />
    </div>
  );
}

export default Portfolio;

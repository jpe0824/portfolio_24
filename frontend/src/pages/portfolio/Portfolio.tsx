import "./Portfolio.css";
import {
  DownArrowButton,
  UpArrowButton,
} from "../../components/buttons/Buttons";

function Portfolio() {
  return (
    <div>
      <UpArrowButton page="/skills" direction="up" />
      <h1 className="title">Portfolio</h1>
      <DownArrowButton page="/contact" direction="down" />
    </div>
  );
}

export default Portfolio;

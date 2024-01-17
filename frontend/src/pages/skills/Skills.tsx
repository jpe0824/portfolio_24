import "./Skills.css";
import {
  DownArrowButton,
  UpArrowButton,
} from "../../components/buttons/Buttons";

function Skills() {
  return (
    <div>
      <UpArrowButton page="/about" direction="up" />
      <h1 className="title">Skills</h1>
      <DownArrowButton page="/portfolio" direction="down" />
    </div>
  );
}

export default Skills;

import "./Resume.css";
import {
  DownArrowButton,
  UpArrowButton,
} from "../../components/buttons/Buttons";

function Resume() {
  return (
    <div>
      <UpArrowButton page="/contact" direction="up" />
      <h1 className="title">Resume</h1>
      <DownArrowButton page="/" direction="down" />
    </div>
  );
}

export default Resume;

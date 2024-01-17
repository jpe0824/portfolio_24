import "./About.css"
import { DownArrowButton, UpArrowButton } from "../../components/buttons/Buttons";

function About() {
  return (
    <div>
      <UpArrowButton page="/" direction="up" />
      <h1 className="title">About</h1>
      <DownArrowButton page="/skills" direction="down" />
    </div>
  );
}

export default About;

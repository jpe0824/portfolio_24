import "./Contact.css";
import {
  DownArrowButton,
  UpArrowButton,
} from "../../components/buttons/Buttons";

function Contact() {
  return (
    <div>
      <UpArrowButton page="/portfolio" direction="up" />
      <h1 className="title">Contact</h1>
      <DownArrowButton page="/resume" direction="down" />
    </div>
  );
}

export default Contact;
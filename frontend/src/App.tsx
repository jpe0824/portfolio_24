import "./App.css";
import About from "./pages/about/About";
import Landing from "./pages/landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Resume from "./pages/resume/Resume";
import Header from "./pages/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import About from "./pages/about/About";
import Landing from "./pages/landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

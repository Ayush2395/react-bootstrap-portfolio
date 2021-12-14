import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
// import Projects from "./pages/Projects";
import Services from "./pages/Services";
import "./custom.scss";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mywork" element={<MyWork />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

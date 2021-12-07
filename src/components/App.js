import React from "react";
import "./App.css";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Introduction to react router</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/about" element={ <About />} />
          <Route exact path="/" element={<p>This is Home</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

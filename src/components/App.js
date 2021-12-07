import React from "react";
import "./App.css";
import About from "./About";
import User from "./User";
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
            <li>
            <Link to="/user/somu">Profile 1</Link>
            </li>
            <li>
            <Link to="/user/sanjeeb">Profile 2</Link>
            </li>
            <li>
            <Link to="/user/gochhayat">Profile 3</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/about" element={ <About />} />
          <Route exact path="/" element={<p>This is Home</p>} />
          <Route exact path="/user/:username" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

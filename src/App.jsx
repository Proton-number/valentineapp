import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Main from "./Components/Main";
import Unique from "./Components/Unique";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/unique" element={<Unique />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

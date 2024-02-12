import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Main from "./Components/Main";
import Unique from "./Components/Unique";

function App() {
  const [login, setLogin] = useState(localStorage.getItem("loggedIn"));


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/main/:userId"
            element={<Main login={login} setLogin={setLogin} />}
          />
          <Route
            path="/"
            element={<SignUp login={login} setLogin={setLogin} />}
          />
          <Route path="/unique" element={<Unique />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

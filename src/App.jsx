import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Main from "./Components/Main";
import Unique from "./Components/Unique";
import { useParams } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(localStorage.getItem("loggedIn"));

  const { userId } = useParams();

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
          <Route path="/unique" element={<Unique userId={userId} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

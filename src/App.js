import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Signin from "./pages/Signin";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

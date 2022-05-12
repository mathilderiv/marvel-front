import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

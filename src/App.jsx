import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HighlightedCarsPage from "./pages/HighlightedCarsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/caranalytic/" element={<Dashboard />} />
        <Route path="/highlighted" element={<HighlightedCarsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

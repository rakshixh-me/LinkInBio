import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { linksData } from "./linksData";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {Object.keys(linksData).map((pageKey, index) => (
            <Route
              key={index}
              path={index === 0 ? "/" : `/${pageKey}`}
              element={<Home />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

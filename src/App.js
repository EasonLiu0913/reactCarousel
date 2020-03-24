import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import ActivityCarousel from "./ActivityCarousel";

function App() {
  return (
    <>
      <Router>
        <Route path="/">
          <ActivityCarousel />
        </Route>
      </Router>
    </>
  );
}

export default App;

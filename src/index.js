import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllQuestions from "./AllQuestions.js";
import QuestionThread from "./QuestionThread";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/allQuestions" element={<AllQuestions />} />
        <Route path="/" element={<App />} />
        <Route path="/questionThread/:id" element={<QuestionThread />} />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
reportWebVitals();

import React from "react";
import QuestionPreview from "./QuestionPreview";
import "./QuestionPreview";
import { Link } from "react-router-dom";
import questions from "./questions.js";
function App() {
  const questionDetails = [questions[1], questions[2], questions[3]];

  return (
    <>
      <div className="questionCards">
        <QuestionPreview questionDetails={questionDetails} />
      </div>
      <Link to="/allQuestions">All Questions</Link>
    </>
  );
}

export default App;

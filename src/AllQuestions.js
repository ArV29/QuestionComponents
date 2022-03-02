import QuestionPreview from "./QuestionPreview";
import "./QuestionPreview"
import "./AllQuestions.css"
import questions from './questions';
function AllQuestions() {
  var questionDetails = Object.keys(questions).map(function (key) {
    return questions[key];
  });
  return <QuestionPreview questionDetails={questionDetails} />;
}

export default AllQuestions;

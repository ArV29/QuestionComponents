import React from "react";
import { ImArrowUp } from 'react-icons/im';
import { ImArrowDown } from 'react-icons/im';
import { BiCommentDetail } from 'react-icons/bi';
import "./QuestionThread.css"
import { useParams } from 'react-router';
import questions from "./questions";
const QuestionThread = () => {
  const { id } = useParams();
  console.log(id);
  const details = questions[id]
  const renderThread = details.comments.map((comment) => {
    return (
      <div className="commentThread">
        <div className="comment">{comment}</div>
      </div>
    );
  });


  return (
    <div className="questionThread">
      <div className="question">{details.question}</div>
      <div className="answer">{details.answer}</div>
      <div className="divider"></div>
      <div className="statistics">
        <div className="vote"><ImArrowUp className="upvote" /> <ImArrowDown className="downvote" /><div className="votes">{details.votes}</div></div>
        <div className="comments"><BiCommentDetail className="commentIcon" />{details.numberOfComments}</div>
      </div>
      <div className="thread">
        {renderThread}
      </div>
    </div>
  );
};

export default QuestionThread;
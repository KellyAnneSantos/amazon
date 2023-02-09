import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchQuestion } from "../../store/questionReducer";
import AnswerItem from "../AnswerItem";
import QuestionProductItem from "../QuestionProductItem";
import "./AnswerForm.css";

const AnswerForm = () => {
  const dispatch = useDispatch();
  const { questionId } = useParams();

  const question = useSelector((state) => state?.questions[questionId]);
  const answers = question?.Answers;

  useEffect(() => {
    dispatch(fetchQuestion(questionId));
  }, [dispatch]);

  return (
    <>
      <div id="answer-top">
        <QuestionProductItem productId={question?.productId} />
        <div id="answer-right">
          <h1 id="answer-question-title">{question?.body}</h1>
          <h3 id="answer-question-date">
            asked on {question?.updatedAt.substring(0, 10)}
          </h3>
          <h2 id="answer-prompt-title">Add a written answer</h2>
          <textarea id="answer-input" />
          <hr id="answer-top-hr" />
          <div>
            <i class="fa-solid fa-circle-info"></i>
            <span id="answer-required">Written answer required.</span>
          </div>
          <button id="answer-btn">Answer</button>
          <p id="answer-link">See all questions about this product</p>
        </div>
      </div>
      <div id="answer-bottom">
        <hr />
        <p id="answer-count">
          Showing {question?.Answers?.length ? 1 : 0}-
          {question?.Answers?.length} of {question?.Answers?.length} answer(s)
        </p>
        <div>
          {answers?.map((answer) => {
            return <AnswerItem key={answer?.id} answer={answer} />;
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default AnswerForm;

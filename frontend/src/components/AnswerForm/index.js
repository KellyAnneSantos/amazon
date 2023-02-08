import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchQuestion } from "../../store/questionReducer";
import QuestionProductItem from "../QuestionProductItem";

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
      <QuestionProductItem productId={question?.productId} />
      <h1>{question?.body}</h1>
      <h3>asked on {question?.updatedAt.substring(0, 10)}</h3>
      <h2>Add a written answer</h2>
      <input />
      <hr />
      <p>Written answer required.</p>
      <button>Answer</button>
      <p>See all questions about this product</p>
      <p>
        Showing {question?.Answers?.length ? 1 : 0}-{question?.Answers?.length}{" "}
        of {question?.Answers?.length} answer(s)
      </p>
      <div>
        {answers?.map((answer) => {
          // return <AnswerItem key={answer?.id} answer={answer} />;
          return null;
        })}
      </div>
    </>
  );
};

export default AnswerForm;

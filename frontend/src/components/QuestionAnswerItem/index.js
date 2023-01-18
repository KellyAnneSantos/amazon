import "./QuestionAnswerItem.css";

const QuestionAnswerItem = ({ question }) => {
  const answers = question?.Answers;

  return (
    <div className="product-qa-container">
      <div className="product-question-container">
        <span className="product-question-colon">Question: </span>
        <div className="product-q-text-container">
          <p className="product-question-text">{question?.body}</p>
        </div>
      </div>
      <div className="product-answer-container">
        <span className="product-answer-colon">Answers: </span>
        <div>
          {answers.map((answer) => {
            return (
              <div className="product-answer-right">
                <p className="product-answer-text">{answer?.body}</p>
                <p className="product-answer-signature">
                  By {answer?.User?.fakeName} on{" "}
                  {answer?.createdAt.substring(0, 10)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerItem;

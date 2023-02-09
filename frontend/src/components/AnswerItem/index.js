import { NavLink } from "react-router-dom";
import "./AnswerItem.css";

const AnswerItem = ({ answer }) => {
  return (
    <>
      <p className="answer-body">{answer.body}</p>
      <div className="answer-user">
        <NavLink to={`/profile/${answer.User?.id}`}>
          <img
            src={answer.User?.previewImage}
            alt="User"
            className="answer-img"
          />
        </NavLink>
        <NavLink
          to={`/profile/${answer.User?.id}`}
          className="answer-user-name"
        >
          <span className="answer-user-name">{answer.User?.fakeName}</span>
        </NavLink>
        <span className="answer-date">{answer.updatedAt.substring(0, 10)}</span>
      </div>
      <div>
        <span className="answer-helpful-question">
          Do you find this helpful?
        </span>
        <button>Yes</button>
        <button>No</button>
        <hr />
      </div>
    </>
  );
};

export default AnswerItem;

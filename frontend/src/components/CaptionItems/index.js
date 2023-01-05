import { useHistory } from "react-router-dom";

const CaptionItems = ({ department }) => {
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();

    history.push(`/search?department=${department}`);
  };

  return (
    <p className="landing-card-captions" onClick={handleClick}>
      Shop more from {department}
    </p>
  );
};

export default CaptionItems;

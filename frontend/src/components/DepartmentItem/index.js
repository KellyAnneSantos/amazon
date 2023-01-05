import { useHistory } from "react-router-dom";

const DepartmentItem = ({ department }) => {
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();

    history.push(`/search?department=${department}`);
  };

  return (
    <span className="dept-nav-links" onClick={handleClick}>
      {department}
    </span>
  );
};

export default DepartmentItem;

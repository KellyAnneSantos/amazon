import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const history = useHistory();

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setName("");

    history.push(`/search?name=${name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" id="magnifying-btn">
          <i class="fa-solid fa-magnifying-glass fa-lg"></i>
        </button>
      </form>
    </>
  );
};

export default SearchBar;

import { useState } from "react";
import { getArticles } from "./apiFunctions";
import ArticleInList from "./ArticleInList";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchItem) {
      navigate(`/search?query=${encodeURIComponent(searchItem)}`);
    }
  };
  return (
    <section className="form-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <p className="search-title">Search by article title</p>
        <input
          id="search-field"
          type="text"
          value={searchItem}
          onChange={handleInputChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;

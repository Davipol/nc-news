const SearchForm = () => {
  return (
    <section className="form-section">
      <form className="search-form">
        <p className="search-title">Search by article ID or by topic</p>
        <label htmlFor="search-field" className="search-label" hidden>
          Search by article ID or by topic
        </label>
        <input id="search-field" type="text" method="get" />
        <button className="search-button">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;

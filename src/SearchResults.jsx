import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "./apiFunctions";
import ArticleInList from "./ArticleInList";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const query = searchParams.get("query") || "";

  useEffect(() => {
    getArticles()
      .then((data) => {
        const filtered = data.articles.filter((article) =>
          article.title.toLowerCase().includes(query.toLowerCase())
        );
        setArticles(filtered);
        setLoading(false);
        if (filtered.length === 0) {
          setError("No matching articles found.");
        }
      })
      .catch(() => {
        setError("Failed to fetch articles.");
        setLoading(false);
      });
  }, [query]);

  return (
    <section className="main-section">
      <h3 className="main-page-h3">Search Results for "{query}":</h3>
      {loading ? (
        <p>Loading...</p>
      ) : articles.length === 0 ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="articles-list">
          {articles.map((article) => (
            <ArticleInList key={article.article_id} article={article} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default SearchResults;

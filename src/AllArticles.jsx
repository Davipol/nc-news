import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "./apiFunctions";
import ArticleInList from "./ArticleInList";
import SortBy from "./SortBy";

const AllArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const sort_by = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    if (!searchParams.get("sort_by") || !searchParams.get("order")) {
      setSearchParams({ sort_by, order });
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    getArticles({ sort_by, order })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load articles.");
        setLoading(false);
      });
  }, [sort_by, order]);

  if (error) return <p className="error-message">{error}</p>;
  return (
    <section className="main-section">
      <SortBy />
      {loading ? (
        <p className="loading-message">Loading Articles for you...</p>
      ) : (
        <>
          <h3 className="main-page-h3">All Articles:</h3>
          <ul className="articles-list">
            {articles.map((article) => (
              <ArticleInList key={article.article_id} article={article} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default AllArticles;

import { useEffect, useState } from "react";
import { getArticles } from "./apiFunctions";

import ArticleInList from "./ArticleInList";

const PopularArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getArticles({ sort_by: "votes", order: "desc" })
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError("Failed to load articles.");
        setLoading(false);
      });
  }, []);

  if (error) return <p className="error-message">{error}</p>;
  return (
    <section className="main-section">
      {loading ? (
        <p>Loading Articles for you...</p>
      ) : (
        <>
          <h3 className="main-page-h3">Popular Articles:</h3>
          <ul className="articles-list">
            {articles.slice(0, 5).map((article) => (
              <ArticleInList key={article.article_id} article={article} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
export default PopularArticles;

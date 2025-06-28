import { useEffect, useState } from "react";
import { getArticles } from "./apiFunctions";
import ArticleInList from "./ArticleInList";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles({ sort_by: "created_at", order: "desc" })
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
          setLoading(false);

          console.log(data.articles);
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
        <ul className="articles-list">
          <h3 className="main-page-h3">Latest Articles:</h3>
          {articles.slice(0, 5).map((article) => (
            <ArticleInList key={article.article_id} article={article} />
          ))}
        </ul>
      )}
    </section>
  );
};
export default HomePage;

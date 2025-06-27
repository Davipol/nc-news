import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "./apiFunctions";
import ArticleInList from "./ArticleInList";
import SortBy from "./SortBy";

const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const sort_by = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    setLoading(true);
    getArticles({ topic, sort_by, order })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [topic, sort_by, order]);

  return (
    <section className="main-section">
      <SortBy />
      {loading ? (
        <p>Loading Articles for you...</p>
      ) : (
        <>
          <h3 className="main-page-h3">Articles about {topic}:</h3>
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

export default ArticlesByTopic;

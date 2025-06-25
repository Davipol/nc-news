import { useParams } from "react-router-dom";
import ArticleInList from "./ArticleInList";
import { useEffect, useState } from "react";
import { getAllArticles } from "./apiFunctions";
const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then((data) => {
        const filteredArticles = data.articles.filter(
          (article) => article.topic === topic
        );
        setArticles(filteredArticles);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load articles.");
        console.error(err);
      });
  }, []);

  return (
    <section className="main-section">
      {loading ? (
        <p>Loading Articles for you...</p>
      ) : (
        <>
          <h3 className="main-page-h3">Articles about {topic} : </h3>
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

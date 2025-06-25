import { useEffect, useState } from "react";
import { getPopularArticles } from "./apiFunctions";

import ArticleInList from "./ArticleInList";

const PopularArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getPopularArticles()
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err, "Failed to fetch popular articles");
        setLoading(false);
      });
  }, []);
  return (
    <section className="main-section">
      {loading ? (
        <p>Loading Articles for you...</p>
      ) : (
        <>
          <h3 className="main-page-h3">Latest Articles:</h3>
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

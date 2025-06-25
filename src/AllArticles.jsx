import { useEffect, useState } from "react";
import { getAllArticles } from "./apiFunctions";
import ArticleInList from "./ArticleInList";

const AllArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
          setLoading(false);

          console.log(data.articles);
        }
      })
      .catch((err) => {
        console.log(err, "Failed to fetch articles");
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

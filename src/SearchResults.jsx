import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "./apiFunctions";
import ArticleInList from "./ArticleInList";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get("query") || "";

  useEffect(() => {
    getArticles()
      .then((data) => {
        const filtered = data.articles.filter((article) =>
          article.title.toLowerCase().includes(query.toLowerCase())
        );
        setArticles(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching articles:", err);
        setLoading(false);
      });
  }, [query]);

  return (
    <section className="main-section">
      <h3 className="main-page-h3">Search Results for "{query}":</h3>
      {loading ? (
        <p>Loading...</p>
      ) : articles.length === 0 ? (
        <p>No matching articles found.</p>
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

import { Link } from "react-router-dom";

const ArticleInList = ({ article }) => {
  return (
    <li className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h4>{article.title.toUpperCase()}</h4>
      </Link>
      <img
        src={article.article_img_url}
        alt={`image for ${article.title}`}
      ></img>
      <p>
        Post by: {article.author} | Date:{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </p>

      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </li>
  );
};
export default ArticleInList;

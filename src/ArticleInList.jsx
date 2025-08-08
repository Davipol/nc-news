import { Link } from "react-router-dom";

const ArticleInList = ({ article }) => {
  return (
    <li className="article-card">
      <Link
        to={`/articles/${article.article_id}`}
        className="article-in-list-title-link"
      >
        <h4 className="article-in-list-title">{article.title.toUpperCase()}</h4>
      </Link>
      <img
        src={article.article_img_url}
        alt={`image for ${article.title}`}
      ></img>
      <p className="article-in-list-paragraph">
        <strong>Post by:</strong> {article.author} | <strong>Date: </strong>
        {new Date(article.created_at).toLocaleDateString()}
      </p>

      <p className="article-in-list-paragraph">
        <strong>Topic:</strong> {article.topic}
      </p>
      <p className="article-in-list-paragraph">
        <strong>Votes:</strong> {article.votes}
      </p>
      <p className="article-in-list-paragraph">
        <strong>Comments:</strong> {article.comment_count}
      </p>
    </li>
  );
};
export default ArticleInList;

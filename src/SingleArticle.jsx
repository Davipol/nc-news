import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./apiFunctions";

const SingleArticle = () => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState([0]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        if (data.article) {
          console.log(data.article);
          setArticle(data.article);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err, "Failed to fetch article");
      });
  }, []);
  return (
    <section className="main-section single-article">
      <h3 className="main-page-h3">{article.title}</h3>
      <p>Post by: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img src={article.article_img_url}></img>
      <p>{article.body}</p>
      <p>
        Votes: {article.votes}
        <span>
          <button type="button">Vote This Article</button>
        </span>
      </p>
      <p>
        Comments: {article.comment_count}
        <details>See All Comments</details>
        <span>
          <button type="button">Add A Comment</button>
        </span>
      </p>
    </section>
  );
};

export default SingleArticle;

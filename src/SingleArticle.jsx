import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsById,
  addVoteToArticle,
} from "./apiFunctions";
import CommentCard from "./CommentCard";
import AddCommentBox from "./AddCommentBox";
import DeleteCommentBox from "./DeleteCommentBox";

const SingleArticle = () => {
  const [addCommentBoxVisible, setAddCommentBoxVisible] = useState(false);
  const [deleteCommentBoxVisible, setDeleteCommentBoxVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [voteError, setVoteError] = useState(null);
  const { article_id } = useParams();

  const handleDeleteCommentBoxClick = () => {
    if (!deleteCommentBoxVisible) {
      setDeleteCommentBoxVisible(true);
      setAddCommentBoxVisible(false);
    } else {
      setDeleteCommentBoxVisible(false);
    }
  };

  const handleAddCommentBoxClick = () => {
    if (!addCommentBoxVisible) {
      setAddCommentBoxVisible(true);
      setDeleteCommentBoxVisible(false);
    } else {
      setAddCommentBoxVisible(false);
    }
  };

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        if (data.article) {
          setArticle(data.article);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError("Failed to load article");
        setLoading(false);
      });
  }, [article_id]);

  const fetchComments = () => {
    getCommentsById(article_id)
      .then((data) => {
        if (data.comments) {
          setComments(data.comments);
        }
      })
      .catch((err) => {
        console.log(err, "Failed to fetch comments");
      });
  };
  useEffect(() => {
    fetchComments();
  }, [article_id]);

  const handleVote = () => {
    setArticle((current) => ({
      ...current,
      votes: current.votes + 1,
    }));
    setVoteError(null);
    addVoteToArticle(article_id, 1).catch((err) => {
      setArticle((curr) => ({
        ...curr,
        votes: curr.votes - 1,
      }));
      setVoteError("Your vote was not added, please try again.");
      console.error("Vote was not added:", err);
    });
  };
  if (loading) return <p>Loading article...</p>;
  return (
    <section className="main-section single-article">
      {error && <p className="error-message">{error}</p>}
      <h3 className="main-page-h3">{article.title}</h3>
      <p>
        Post by: {article.author} on{" "}
        {new Date(article.created_at).toLocaleDateString()}
        <span></span>
      </p>
      <p>Topic: {article.topic}</p>
      <img src={article.article_img_url}></img>
      <p>{article.body}</p>
      <p>
        Votes: {article.votes}
        <span>
          <button type="button" onClick={handleVote}>
            Vote This Article
          </button>
        </span>
      </p>
      {voteError && <p className="error-message">{voteError}</p>}
      <p>
        Comments: {article.comment_count}
        <span>
          <button type="button" onClick={handleAddCommentBoxClick}>
            {addCommentBoxVisible ? "Hide Comment Box" : "Add A Comment"}
          </button>
          <span>
            <button type="button" onClick={handleDeleteCommentBoxClick}>
              {deleteCommentBoxVisible ? "Hide" : "Delete A Comment"}
            </button>
          </span>
        </span>
      </p>
      {deleteCommentBoxVisible && (
        <DeleteCommentBox onCommentDeleted={fetchComments} />
      )}
      {addCommentBoxVisible && <AddCommentBox onCommentAdded={fetchComments} />}
      <ul className="comments-list">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </section>
  );
};

export default SingleArticle;

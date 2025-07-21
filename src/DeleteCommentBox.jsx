import { useParams } from "react-router-dom";
import { getCommentsById, deleteComment } from "./apiFunctions";
import { useState } from "react";
import CommentCard from "./CommentCard";

const DeleteCommentBox = ({ onCommentDeleted }) => {
  const { article_id } = useParams();
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserActivity = () => {
    if (successMsg) setSuccessMsg("");
    if (error) setError("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserActivity();

    getCommentsById(article_id)
      .then((data) => {
        const filtered = data.comments.filter(
          (comment) => comment.author === username
        );
        if (filtered.length === 0) {
          setError("No comments found for this username.");
          setSuccessMsg("");
        }
        setUserComments(filtered);
      })
      .catch(() => setError("Failed to fetch comments."));
  };

  const handleDelete = (comment_id) => {
    setLoading(true);

    deleteComment(comment_id)
      .then(() => {
        setUserComments((curr) =>
          curr.filter((comment) => comment.comment_id !== comment_id)
        );
        setSuccessMsg("Comment deleted successfully.");
        setUsername("");
        setLoading(false);
        if (onCommentDeleted) {
          onCommentDeleted();
        }
      })
      .catch(() => {
        setError("Failed to delete comment.");
        setLoading(false);
      });
  };

  return (
    <section className="comment-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insert username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
            handleUserActivity();
            setError("");
          }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {loading && (
        <p className="loading-paragraph">Deleting comment, please wait...</p>
      )}
      {successMsg && <p className="success-message">{successMsg}</p>}
      {userComments.length > 0 && (
        <ul className="comments-list">
          {userComments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
export default DeleteCommentBox;

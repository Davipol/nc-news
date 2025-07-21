import { useParams } from "react-router-dom";
import { addComment } from "./apiFunctions";
import { useState } from "react";

const AddCommentBox = ({ onCommentAdded }) => {
  const { article_id } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);

    if (!body || !username) {
      setError("Please insert both username and comment before submitting.");
      setLoading(false);
      return;
    }

    addComment(article_id, username, body)
      .then((data) => {
        setSuccessMsg("Comment added successfully.");
        setBody("");
        setUsername("");
        setLoading(false);
        if (onCommentAdded) {
          onCommentAdded();
        }
      })
      .catch((err) => {
        setError("Failed to add comment. Please try again.");
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
          onChange={(event) => setUsername(event.target.value)}
        />
        <textarea
          className="comment-textarea"
          placeholder="Type your comment..."
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <div className="comment-buttons">
          <button type="submit">Add</button>
          <button type="button" onClick={() => setBody("")}>
            Cancel
          </button>
        </div>
      </form>
      {loading && <p>Adding your comment, please wait...</p>}
      {error && <p className="error-message">{error}</p>}
      {successMsg && <p className="success-message">{successMsg}</p>}
    </section>
  );
};

export default AddCommentBox;

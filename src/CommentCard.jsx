const CommentCard = ({ comment, onDelete }) => {
  return (
    <li className="comment-card">
      <p>
        Comment by: {comment.author} on{" "}
        {new Date(comment.created_at).toLocaleDateString()}
      </p>

      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      {onDelete && (
        <button onClick={() => onDelete(comment.comment_id)}>Delete</button>
      )}
    </li>
  );
};
export default CommentCard;

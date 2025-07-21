const UserInlist = ({ user }) => {
  return (
    <li key={user.username} className="user-card">
      <p>{user.username}</p>
      <img
        className="user-image"
        src={user.avatar_url}
        alt={`Avatar for user ${user.username}`}
      ></img>
    </li>
  );
};
export default UserInlist;

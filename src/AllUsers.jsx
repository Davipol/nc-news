import { useEffect, useState } from "react";
import { getAllUsers } from "./apiFunctions";
import UserInlist from "./UserInList";

const AllUsers = (children) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getAllUsers()
      .then((data) => {
        if (data.users) {
          setUsers(data.users);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError("Failed to load users.");
        setLoading(false);
      });
  }, []);

  if (error) return <p className="error-message">{error}</p>;
  return (
    <section className="main-section">
      {loading ? (
        <p className="loading-message">Loading All Users...</p>
      ) : (
        <>
          <h3 className="main-page-h3">All Users:</h3>
          <ul className="topics-list">
            {users.map((user) => (
              <UserInlist key={user.username} user={user} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
export default AllUsers;

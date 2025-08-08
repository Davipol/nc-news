import { useEffect, useState } from "react";
import { getAllTopics } from "./apiFunctions";
import { Link } from "react-router-dom";

const AllTopics = () => {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllTopics()
      .then((data) => {
        if (data.topics) {
          setTopics(data.topics);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError("Failed to load topics.");
        setLoading(false);
      });
  }, []);

  if (error) return <p className="error-message">{error}</p>;

  return (
    <section className="main-section">
      {loading ? (
        <p className="loading-message">Loading All Topics...</p>
      ) : (
        <>
          <h3 className="main-page-h3">All Topics:</h3>
          <ul className="topics-list">
            {topics.map((topic) => (
              <li key={topic.slug} className="topic-list-item">
                <Link to={`/all-topics/topics/${topic.slug}`}>
                  {topic.slug}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
export default AllTopics;

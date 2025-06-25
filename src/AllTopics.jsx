import { useEffect, useState } from "react";
import { getAllTopics } from "./apiFunctions";

const AllTopics = () => {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getAllTopics()
      .then((data) => {
        console.log(data);
        if (data.topics) {
          setTopics(data.topics);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err, "Failed to fetch topics");
        setLoading(false);
      });
  }, []);

  return (
    <section className="main-section">
      <h3 className="main-page-h3">All Topics:</h3>
      <ul className="topics-list">
        {topics.map((topic) => (
          <li key={topic.slug} className="topic-list-item">
            {topic.slug}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default AllTopics;

import { useNavigate } from "react-router-dom";

const ErrorNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <section className="error-not-found">
      <h2>404 - Page Not Found</h2>
      <p>This page does not exist.</p>
      <button onClick={handleClick}>Go Back</button>
    </section>
  );
};

export default ErrorNotFound;

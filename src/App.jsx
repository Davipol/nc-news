import Header from "./Header";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import HomePage from "./HomePage";
import Footer from "./Footer";
import PopularArticles from "./PopularArticles";
import AllArticles from "./AllArticles";
import AllTopics from "./AllTopics";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <section className="container">
      <Header />

      <Navbar />
      <SearchForm />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular-articles" element={<PopularArticles />} />
        <Route path="/all-articles" element={<AllArticles />} />
        <Route path="/all-topics" element={<AllTopics />} />
      </Routes>

      <Footer />
    </section>
  );
}

export default App;

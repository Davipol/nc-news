import Header from "./Header";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import HomePage from "./HomePage";
import Footer from "./Footer";
import PopularArticles from "./PopularArticles";
import AllArticles from "./AllArticles";
import AllTopics from "./AllTopics";
import AllUsers from "./AllUsers";
import SingleArticle from "./SingleArticle";
import ArticlesbyTopic from "./ArticlesByTopic";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="container">
      <Header />

      <Navbar />
      <SearchForm />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-articles" element={<AllArticles />} />
        <Route path="/popular-articles" element={<PopularArticles />} />
        <Route path="/all-topics" element={<AllTopics />} />
        <Route path="/all-topics/topics/:topic" element={<ArticlesbyTopic />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;

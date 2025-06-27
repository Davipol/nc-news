import { useState } from "react";
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
import SearchResults from "./SearchResults";
import ErrorNotFound from "./ErrorNotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((visible) => !visible);
  };
  return (
    <section className="container">
      <Header />

      <Navbar isVisible={isNavVisible} toggleNav={toggleNav} />
      <SearchForm />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-articles" element={<AllArticles />} />
        <Route path="/popular-articles" element={<PopularArticles />} />
        <Route path="*" element={<ErrorNotFound />} />
        <Route path="/all-topics" element={<AllTopics />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/all-topics/topics/:topic" element={<ArticlesbyTopic />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;

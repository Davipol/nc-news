import { useParams } from "react-router-dom";

export const getLatestArticles = () => {
  return fetch("/api/articles?sort_by=created_at").then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }
    return res.json();
  });
};
export const getPopularArticles = () => {
  return fetch("/api/articles?sort_by=votes").then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }
    return res.json();
  });
};
export const getAllArticles = () => {
  return fetch("/api/articles").then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }
    return res.json();
  });
};

export const getAllTopics = () => {
  return fetch("/api/topics").then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }
    return res.json();
  });
};
export const getAllUsers = () => {
  return fetch("/api/users").then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }
    return res.json();
  });
};
export const getArticleById = (article_id) => {
  return fetch(`/api/articles/${article_id}`).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch article",
      });
    }
    return res.json();
  });
};

export const getCommentsById = (article_id) => {
  return fetch(`/api/articles/${article_id}/comments`).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch comments",
      });
    }
    return res.json();
  });
};

export const addVoteToArticle = (article_id, increment) => {
  return fetch(`http://localhost:9090/api/articles/${article_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inc_votes: increment }),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to add vote",
      });
    }
    return res.json();
  });
};

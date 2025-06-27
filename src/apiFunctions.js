import { useParams } from "react-router-dom";

export const getArticles = ({ sort_by, order, topic } = {}) => {
  const params = new URLSearchParams();
  if (sort_by) params.append("sort_by", sort_by);
  if (order) params.append("order", order);
  if (topic) params.append("topic", topic);

  return fetch(`/api/articles?${params.toString()}`).then((res) => {
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

export const addComment = (article_id, username, body) => {
  return fetch(`http://localhost:9090/api/articles/${article_id}/comments`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      body: body,
    }),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to add comment",
      });
    }
    return res.json();
  });
};

export const deleteComment = (comment_id) => {
  return fetch(`http://localhost:9090/api/comments/${comment_id}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "failed to delete comment",
      });
    }
    return;
  });
};

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:9090";

export const getArticles = ({ sort_by, order, topic } = {}) => {
  const params = new URLSearchParams();
  if (sort_by) params.append("sort_by", sort_by);
  if (order) params.append("order", order);
  if (topic) params.append("topic", topic);

  return fetch(`${API_URL}/api/articles?${params.toString()}`).then((res) => {
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
  return fetch(`${API_URL}/api/topics`).then((res) => {
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
  return fetch(`${API_URL}/api/users`).then((res) => {
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
  return fetch(`${API_URL}/api/articles/${article_id}`).then((res) => {
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
  return fetch(`${API_URL}/api/articles/${article_id}/comments`).then((res) => {
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
  return fetch(`${API_URL}/articles/${article_id}`, {
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
  return fetch(`${API_URL}/articles/${article_id}/comments`, {
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
  return fetch(`${API_URL}/comments/${comment_id}`, {
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

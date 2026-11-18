import { MAIN_API_URL } from "./constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res
    .json()
    .catch(() => ({}))
    .then((data) =>
      Promise.reject(data.message || `Erro ${res.status}: ${res.statusText}`),
    );
}

function request(path, options) {
  return fetch(`${MAIN_API_URL}${path}`, options).then(checkResponse);
}

function authHeaders(token) {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export function signup({ name, email, password }) {
  return request("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
}

export function signin({ email, password }) {
  return request("/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}

export function getCurrentUser(token) {
  return request("/users/me", {
    headers: authHeaders(token),
  });
}

export function getSavedArticles(token) {
  return request("/articles", {
    headers: authHeaders(token),
  });
}

export function saveArticle(token, article) {
  return request("/articles", {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(article),
  });
}

export function deleteArticle(token, articleId) {
  return request(`/articles/${articleId}`, {
    method: "DELETE",
    headers: authHeaders(token),
  });
}

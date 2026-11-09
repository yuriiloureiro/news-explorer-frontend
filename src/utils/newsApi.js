import { NEWS_API_URL, NEWS_API_KEY, PAGE_SIZE } from "./constants";

export function searchNews(keyword) {
  const query = encodeURIComponent(keyword);
  const apiKeyParam = NEWS_API_KEY ? `&apiKey=${NEWS_API_KEY}` : "";
  const url = `${NEWS_API_URL}/everything?q=${query}&pageSize=${PAGE_SIZE}${apiKeyParam}`;

  return fetch(url).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Erro ${res.status}: ${res.statusText}`);
    }
    return res.json();
  });
}

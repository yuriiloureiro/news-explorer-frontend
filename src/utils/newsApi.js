import { NEWS_API_URL, NEWS_API_KEY, PAGE_SIZE } from "./constants";

export function searchNews(keyword) {
  const url = `${NEWS_API_URL}/everything?q=${encodeURIComponent(
    keyword,
  )}&pageSize=${PAGE_SIZE}&apiKey=${NEWS_API_KEY}`;

  return fetch(url).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Erro ${res.status}: ${res.statusText}`);
    }
    return res.json();
  });
}

export const NEWS_API_URL = import.meta.env.PROD
  ? "https://news-api-proxy.up.railway.app/news/v2"
  : "https://newsapi.org/v2";

export const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const PAGE_SIZE = 100;

export const MAIN_API_URL = import.meta.env.PROD
  ? "https://news-explorer-backend-tzeq.onrender.com"
  : "http://localhost:3000";

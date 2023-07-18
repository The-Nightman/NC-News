import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-v54w.onrender.com/api",
});

export const getAllArticles = () => {
  return ncNewsApi
    .get("/articles")
    .then((res) => {
      return res.data.articles;
    })
};

export const getArticleByID = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    })
};

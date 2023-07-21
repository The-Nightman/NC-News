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

export const getArticleComments = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
};

export const updateArticleVotes = (article_id, voteUpdate) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, {inc_votes: voteUpdate})
    .then((res) => {
      return res.data.article;
    })
};

export const postNewComment = (article_id, newComment) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then((res) => {
      return res.data.comment;
    })
};

export const getAllTopics = () => {
  return ncNewsApi
    .get("/topics")
    .then((res) => {
      return res.data.topics;
    })
};

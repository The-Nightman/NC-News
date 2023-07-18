import { Article } from "../components";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios"

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`https://nc-news-v54w.onrender.com/api/articles/${article_id}`)
      .then((res) => {
        console.log(res.data.article)
        setArticle(res.data.article)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Article article={article}/>
    </>
  );
};

export default ArticlePage;

import { Article } from "../components";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getArticleByID } from "../utils/api";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleByID(article_id)
      .then((data) => {
        setArticle(data)
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

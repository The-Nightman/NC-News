import { Article, Loader } from "../components";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getArticleByID } from "../utils/api";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleByID(article_id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    { loading ? <Loader/> :
      <Article article={article}/> }
    </>
  );
};

export default ArticlePage;

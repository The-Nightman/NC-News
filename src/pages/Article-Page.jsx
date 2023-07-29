import { Article, Loader, CommentsContainer } from "../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleByID } from "../utils/api";
import { Alert } from "@mui/material";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState(false);

  const openComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    getArticleByID(article_id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorStatus(true)
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : errorStatus ? (
        <Alert severity="error" style={{ margin: "0.5rem" }}>
          Article does not exist!
        </Alert>
      ) : (
        <Article article={article} openComments={openComments} />
      )}
      {showComments ? (
        <div className="comments">
          <CommentsContainer article_id={article_id} />
        </div>
      ) : null}
    </>
  );
};

export default ArticlePage;

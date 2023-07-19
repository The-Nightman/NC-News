import { Article, Loader, CommentsContainer } from "../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleByID } from "../utils/api";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);

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
        console.log(err);
      });
  }, []);

  return (
    <>
    
      {loading ? (
        <Loader />
      ) : (
        <Article article={article} openComments={openComments} />
      )}
      {showComments ? (
        <div className="comments">
          <CommentsContainer article_id={article_id}/>
        </div>
      ) : null}
    </>
  );
};

export default ArticlePage;

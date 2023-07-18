import { Article, Loader, CommentCard } from "../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleByID, getArticleComments } from "../utils/api";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState({});
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

  useEffect(() => {
    getArticleComments(article_id)
      .then((data) => {
        setComments(data);
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
          {comments.map(({ comment_id, author, created_at, votes, body }) => {
            return (
              <CommentCard
                key={comment_id}
                author={author}
                created_at={created_at}
                body={body}
                votes={votes}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default ArticlePage;

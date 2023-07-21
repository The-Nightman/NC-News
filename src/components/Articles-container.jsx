import { ArticleCard, Loader } from "../components";
import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { Alert } from "@mui/material";

const ArticlesContainer = ({ sort_by, order, topic }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllArticles(sort_by, order, topic)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  return (
    <>
      {error ? (
        <Alert severity="error">
          An error has occured! Unable to load articles
        </Alert>
      ) : loading ? (
        <Loader />
      ) : (
        <div className="articles">
          {articles.map(
            ({
              article_id,
              title,
              topic,
              author,
              created_at,
              votes,
              article_img_url,
              comment_count,
            }) => {
              return (
                <ArticleCard
                  article_id={article_id}
                  key={article_id}
                  title={title}
                  topic={topic}
                  author={author}
                  created_at={created_at}
                  image={article_img_url}
                  votes={votes}
                  comment_count={comment_count}
                />
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default ArticlesContainer;

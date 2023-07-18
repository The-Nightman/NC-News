import { ArticleCard } from "../components";
import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";

const ArticlesContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
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
    </>
  );
};

export default ArticlesContainer;

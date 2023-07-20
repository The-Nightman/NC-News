import { ArticleButtons } from "../components";
import { parseDate } from "../utils/utils";

const Article = ({ article, openComments, showComments }) => {
  return (
    <>
      <section className="article-container">
        <article>
          <div className="article-header-container">
            <div className="article-header">
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <p>{article.topic}</p>
            </div>
            <p>{parseDate(article.created_at)}</p>
          </div>
          <img
            src={article.article_img_url}
            alt={article.title}
            className="article-image"
          />
          <p>{article.body}</p>
          <div className="article-footer">
            <ArticleButtons article={article} openComments={openComments} showComments={showComments}/>
          </div>
        </article>
      </section>
    </>
  );
};

export default Article;

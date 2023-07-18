import { parseDate } from "../utils/utils";

const ArticleCard = ({
  title,
  author,
  topic,
  image,
  comment_count,
  votes,
  created_at,
}) => {

  return (
    <>
      <div className="article-card">
        <div className="card-body">
          <div className="card-text">
            <h2 className="card-title">{title}</h2>
            <p>{author}</p>
            <p>{topic}</p>
            <div className="card-article-details">
              <div className="card-comments-votes">
                <p>comments: {comment_count}</p>
                <p>votes: {votes}</p>
              </div>
              <p className="article-date">{parseDate(created_at)}</p>
            </div>
          </div>
          <img src={image} alt={title}/>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;

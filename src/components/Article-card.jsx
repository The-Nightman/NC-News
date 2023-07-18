import { parseDate } from "../utils/utils";
import { useNavigate } from "react-router-dom"

const ArticleCard = ({
  article_id,
  title,
  author,
  topic,
  image,
  comment_count,
  votes,
  created_at,
}) => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/article/${article_id}`)
  }

  return (
    <>
      <div className="article-card" onClick={onClick}>
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

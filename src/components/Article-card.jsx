const ArticleCard = ({
  title,
  author,
  topic,
  image,
  comment_count,
  votes,
  created_at,
}) => {

    const parseDate = () => {
        return new Date().toISOString().split('T', 1)[0]
    }


  return (
    <>
      <div className="article-card">
        <div className="card-body">
          <div className="card-text">
            <h3 className="card-title">{title}</h3>
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
          <img src={image} />
        </div>
      </div>
    </>
  );
};

export default ArticleCard;

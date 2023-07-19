import { parseDate } from "../utils/utils";

const CommentCard = ({ author, created_at, votes, body }) => {
  return (
    <>
      <div className="comment-card">
        <div className="comment-content">
          <div className="comment-header">
            <p>{author}</p>
            <p>{parseDate(created_at)}</p>
          </div>
          <p>{body}</p>
          <p>votes: {votes}</p>
        </div>
      </div>
    </>
  );
};

export default CommentCard;

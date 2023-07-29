import { useState, useEffect } from "react";
import { CommentCard, CommentPost, Loader } from "../components";
import { getArticleComments, deleteComment } from "../utils/api";
import { Alert, createTheme, ThemeProvider } from "@mui/material";

const CommentsContainer = ({ article_id }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeeeee",
      },
    },
  });

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteStatus, setDeleteStatus] = useState(null);

  const handleDelete = (id) => {
    setComments((currentVal) =>
      currentVal.filter((comment) => {
        return comment.comment_id != id;
      })
    );
    deleteComment(id)
      .then((data) => {
        setDeleteStatus("success");
      })
      .catch((err) => {
        setDeleteStatus("error");
      });
  };

  useEffect(() => {
    getArticleComments(article_id)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {!loading ? (
          comments.length ? (
            <>
              <CommentPost
                article_id={article_id}
                comments={comments}
                setComments={setComments}
              />
              {deleteStatus === "success" ? (
                <Alert severity="success" style={{ margin: "0.5rem" }}>
                  Comment deleted successfully!
                </Alert>
              ) : deleteStatus === "error" ? (
                <Alert severity="error" style={{ margin: "0.5rem" }}>
                  An error has occured!
                </Alert>
              ) : null}
              {comments.map(
                ({ comment_id, author, created_at, votes, body }) => {
                  return (
                    <CommentCard
                      key={comment_id}
                      id={comment_id}
                      author={author}
                      created_at={created_at}
                      body={body}
                      votes={votes}
                      handleDelete={handleDelete}
                    />
                  );
                }
              )}
            </>
          ) : (
            <>
              <Alert
                variant="filled"
                severity="info"
                color="primary"
                style={{ margin: "0.5rem" }}
              >
                This article has no comments!
              </Alert>
              <CommentPost
                article_id={article_id}
                comments={comments}
                setComments={setComments}
              />
            </>
          )
        ) : (
          <Loader />
        )}
      </ThemeProvider>
    </>
  );
};

export default CommentsContainer;

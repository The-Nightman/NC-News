import { useState, useEffect } from "react";
import { CommentCard, CommentPost, Loader } from "../components";
import { getArticleComments } from "../utils/api";
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
      {!loading ? (
        comments.length ? (
          <>
            <CommentPost
              article_id={article_id}
              comments={comments}
              setComments={setComments}
            />
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
          </>
        ) : (
          <>
            <ThemeProvider theme={theme}>
              <Alert
                variant="filled"
                severity="info"
                color="primary"
                style={{ margin: "0.5rem" }}
              >
                This article has no comments!
              </Alert>
            </ThemeProvider>
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
    </>
  );
};

export default CommentsContainer;

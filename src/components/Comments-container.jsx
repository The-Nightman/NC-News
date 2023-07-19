import { useState, useEffect } from "react";
import { CommentCard } from "../components";
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
      {comments.length ? (
        <>
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
        <ThemeProvider theme={theme}>
        <Alert variant="filled" severity="info" color="primary" style={{ margin: "0.5rem" }}>
          This article has no comments!
        </Alert>
        </ThemeProvider>
      )}
    </>
  );
};

export default CommentsContainer;

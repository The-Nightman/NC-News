import { useState } from "react";
import { Button, TextField, Alert, createTheme, ThemeProvider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { postNewComment } from "../utils/api";
import CommentCard from "./Comment-cards";
import { parseDate } from "../utils/utils";

const CommentPost = ({ article_id, setComments }) => {
  const [comment, setComment] = useState("");
  const [commentStatus, setCommentStatus] = useState("");
  let placeholder = { author: "weegembump", votes: 0 }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeeeee",
      },
    },
  });

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewComment(article_id, {
      body: comment,
      author: placeholder.author,
    })
      .then((data) => {
        setCommentStatus("success");
        setComments((comments) => {
          return [...comments, data];
        });
      })
      .catch((err) => {
        console.log(err);
        setCommentStatus("error");
      });
  };
  console.log(placeholder)
  return (
    <>
    <ThemeProvider theme={theme}>
      {commentStatus === "" ? (
        <div className="new-comment-container">
          <form
            className="comment-form"
            action=""
            method="post"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              multiline
              id="comment-input"
              type="text"
              label="New Comment"
              variant="standard"
              value={comment}
              onChange={handleChange}
            />
            <div className="comment-form-button-container">
              <Button
                type="submit"
                className="comment-form-button"
                variant="outlined"
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      ) : commentStatus === "success" ? (
        <>
          <Alert severity="success" style={{ margin: "0.5rem" }}>
            Your comment has successfully posted!
          </Alert>
          <CommentCard
            author={placeholder.author}
            created_at={parseDate}
            body={comment}
            votes={placeholder.votes}
          />
        </>
      ) : commentStatus === "error" ? (
        <>
          <Alert severity="warning" style={{ margin: "0.5rem" }}>
            An error has occured, please try again or refresh the page!
          </Alert>
          <div className="new-comment-container">
            <form
              className="comment-form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <TextField
                required
                multiline
                id="comment-input"
                type="text"
                label="New Comment"
                variant="standard"
                value={comment}
                onChange={handleChange}
              />
              <div className="comment-form-button-container">
                <Button
                  type="submit"
                  className="comment-form-button"
                  variant="outlined"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <Alert severity="error" style={{ margin: "0.5rem" }}>
          An unknown error has occured, please refresh the page!
        </Alert>
      )}
      </ThemeProvider>
    </>
  );
};

export default CommentPost;

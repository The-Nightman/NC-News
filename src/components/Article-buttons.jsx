import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { updateArticleVotes } from "../utils/api";
import { useState } from "react";

const ArticleButtons = ({ article, openComments, showComments }) => {
  const articleVotes = article.votes
  const [votes, setVotes] = useState(article.votes);
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [upvoteCol, setUpvoteCol] = useState("primary");
  const [downvoteCol, setDownvoteCol] = useState("primary");

  const handleUpVote = (upvote) => {
    if (upvote) {
      setVotes(articleVotes);
      setUpvote(false);
      setUpvoteCol("primary");
      updateArticleVotes(article.article_id, -1)
      .catch((err) => {
        alert("Something went wrong")
      });
    } else {
      setVotes(articleVotes + 1);
      setUpvote(true);
      setUpvoteCol("upvote");
      updateArticleVotes(article.article_id, 1)
      .catch((err) => {
        alert("Something went wrong")
      });
    }
  };
  const handleDownVote = (downvote) => {
    if (downvote) {
      setVotes(articleVotes);
      setDownvote(false);
      setDownvoteCol("primary");
      updateArticleVotes(article.article_id, 1)
      .catch((err) => {
        alert("Something went wrong")
      });
    } else {
      setVotes(articleVotes - 1);
      setDownvote(true);
      setDownvoteCol("downvote");
      updateArticleVotes(article.article_id, -1)
      .catch((err) => {
        alert("Something went wrong")
      });
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeeeee",
      },
      upvote: {
        main: "#A5FF00",
      },
      downvote: {
        main: "#FF8A00",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <ButtonGroup>
          <IconButton
            color={upvoteCol}
            disabled={downvote}
            aria-label="upvote article"
            onClick={() => handleUpVote(upvote)}
          >
            <ArrowCircleUpOutlinedIcon />
          </IconButton>
          <p>Votes: {votes}</p>
          <IconButton
            color={downvoteCol}
            disabled={upvote}
            aria-label="downvote article"
            onClick={() => handleDownVote(downvote)}
          >
            <ArrowCircleDownOutlinedIcon />
          </IconButton>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button
            color="primary"
            aria-label="open comments"
            onClick={() => openComments(!showComments)}
          >
            comments: {article.comment_count}
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    </>
  );
};

export default ArticleButtons;



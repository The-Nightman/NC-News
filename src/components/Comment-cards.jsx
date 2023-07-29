import { IconButton, createTheme, ThemeProvider } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useContext } from "react";
import { UsernameContext } from "../contexts/UserContext";
import { parseDate } from "../utils/utils";

const CommentCard = ({ author, created_at, votes, body, id, handleDelete }) => {
  const { user } = useContext(UsernameContext);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeeeee",
      },
    },
  });

  return (
    <>
      <div className="comment-card">
        <div className="comment-content">
          <div className="comment-header">
            <p>{author}</p>
            <p>{parseDate(created_at)}</p>
          </div>
          <p>{body}</p>
          <div className="comment-footer">
            <p>votes: {votes}</p>
            { user.username === author ? <ThemeProvider theme={theme}>
              <IconButton color="primary" aria-label="delete" onClick={() => handleDelete(id)}>
                <DeleteOutlineIcon/>
              </IconButton>
            </ThemeProvider> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;

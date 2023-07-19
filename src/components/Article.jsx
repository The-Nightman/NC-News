import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { parseDate } from "../utils/utils";

const Article = ({ article, openComments, showComments }) => {

const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee',
    },
  },
});

  return (
    <>
      <section className="article-container">
        <article>
          <div className="article-header-container">
            <div className="article-header">
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <p>{article.topic}</p>
            </div>
            <p>{parseDate(article.created_at)}</p>
          </div>
          <img
            src={article.article_img_url}
            alt={article.title}
            className="article-image"
          />
          <p>{article.body}</p>
          <ThemeProvider theme={theme}>
          <ButtonGroup variant="outlined" className="article-footer">
            <Button color='primary' onClick={() => openComments(!showComments)}>comments: {article.comment_count}</Button>
            <Button color='primary'>votes: {article.votes}</Button>
          </ButtonGroup>
          </ThemeProvider>
        </article>
      </section>
    </>
  );
};

export default Article;

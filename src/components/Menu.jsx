import { getAllTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Loader } from "../components";
import { Alert } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

const Menu = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/')
    window.location.reload(false)
  }

  const handleTopicClick = (e) => {
    setSearchParams(`?topic=${e.target.attributes.tag.value}`)
    window.location.reload(false)
  }

  useEffect(() => {
    getAllTopics()
      .then((data) => {
        setTopics(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <div className="menu">
        <h3 className="menu-home-button" onClick={handleHomeClick}>Home</h3>
        <h3>Topics</h3>
        {loading ? (
          <Loader />
        ) : !error ? (
          <ul>
            {topics.map(({ slug, description }) => {
              return (
                <li key={slug}>
                  <p className="menu-item" tag={slug} onClick={handleTopicClick}>{slug}</p>
                  <p className="menu-item-desc">{description}</p>
                  <hr />
                </li>
              );
            })}
          </ul>
        ) : (
          <Alert severity="warning">
            An error has occured! Unable to load topics
          </Alert>
        )}
      </div>
    </>
  );
};

export default Menu;

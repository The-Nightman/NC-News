import { useSearchParams } from "react-router-dom";
import { ArticlesContainer } from "../components";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const {sort_by, topic, order} = Object.fromEntries(searchParams)

  return (
    <>
      <ArticlesContainer sort_by={sort_by} topic={topic} order={order}/>
    </>
  );
};

export default Home;

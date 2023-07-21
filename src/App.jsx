import { Routes, Route } from "react-router-dom";
import { Home, ArticlePage, Users, Topic } from './pages'
import { Header } from "./components";
import "./components/components.css";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
        <Route path="/topics/:topic" element={<Topic />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;

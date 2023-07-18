import { Routes, Route } from "react-router-dom";
import { Home, ArticlePage, Users } from './pages'
import { Header } from "./components";
import "./components/components.css";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;

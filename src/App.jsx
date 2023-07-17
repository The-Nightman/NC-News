import { Routes, Route } from "react-router-dom";
import { Home, ArticlePage, Users } from './pages'
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;

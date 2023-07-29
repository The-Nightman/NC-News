import { Routes, Route } from "react-router-dom";
import { Home, ArticlePage, Users, ErrorPage } from "./pages";
import { Header } from "./components";
import {
  UsernameContext,
  UsernameContextProvider,
} from "./contexts/UserContext";
import "./components/components.css";

function App() {
  return (
    <>
      <UsernameContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:article_id" element={<ArticlePage />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UsernameContextProvider>
    </>
  );
}

export default App;

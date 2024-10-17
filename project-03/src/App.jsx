import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contents from "./pages/Contents";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import User from "./components/User";
import ContentDetail from "./pages/ContentDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="contents" element={<Contents />}>
            <Route path=":contentId" element={<ContentDetail />} />
          </Route>
          <Route path="/user/:userId" element={<User />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

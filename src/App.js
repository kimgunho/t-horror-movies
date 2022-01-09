import { BrowserRouter, Routes, Route } from "react-router-dom";

import { links } from "./assets/data/links";

import Header from "./components/shared/Header";
import Home from "./pages/home";
import Search from "./pages/search";
import MyMovies from "./pages/myMovies";
import Detail from "./pages/detail";
import NotFount from "./components/shared/NotFount";

const appStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
};

const wrapperStyle = {
  width: "calc(100% - 4rem)",
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <BrowserRouter>
        <Header />
        <div className="wrapper" style={wrapperStyle}>
          <Routes>
            <Route path={links.home} element={<Home />} />
            <Route path={links.search} element={<Search />} />
            <Route path={links.myMovies} element={<MyMovies />} />
            <Route path={links.detail} element={<Detail />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

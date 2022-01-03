import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { links } from "./links";

import Header from "./components/shared/Header";
import Home from "./pages/home";
import Search from "./pages/search";
import Detail from "./pages/detail";

function App() {
  const loadingFunc = () => {
    const loadingText = "loading...";

    window.scrollTo = 1000;
    return loadingText;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>{loadingFunc()}</div>}>
          <Routes>
            <Route path={links.home} element={<Home />} />
            <Route path={links.search} element={<Search />} />
            <Route path={links.detail} element={<Detail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

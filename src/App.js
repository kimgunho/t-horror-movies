import { BrowserRouter, Routes, Route } from "react-router-dom";

import { links } from "./links";

import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={links.home} element={<Home />} />
          <Route path={links.detail} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

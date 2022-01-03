import { BrowserRouter, Routes, Route } from "react-router-dom";

import { links } from "./links";

import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={links.home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

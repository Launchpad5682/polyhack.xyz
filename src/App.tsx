import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalCSS from "./global.styles";

import { Home } from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

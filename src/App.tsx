import React from "react";
import { Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;

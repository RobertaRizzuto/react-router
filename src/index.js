import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Category from "./pages/Category";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Recipe from "./pages/Recipe";
import RecipeYoutubePlayer from "./components/RecipeYoutubePlayer";
import RecipeInstructions from "./components/RecipeInstructions";
import RecipeIngredients from "./components/RecipeIngredients";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path=":categoryName" element={<Category />} />
        <Route path="/:categoryName/:recipeName/:id" element={<Recipe />}>
          <Route path="" element={<Navigate to="instructions" />} />
          <Route path="instructions" element={<RecipeInstructions />} />
          <Route path="ingredients" element={<RecipeIngredients />} />
          <Route path="youtube" element={<RecipeYoutubePlayer />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Category from "./pages/Category";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/:categoryName" element={<Category />}  */}
        
        <Route path="/" element={<App />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/:categoryName" element={<Category />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

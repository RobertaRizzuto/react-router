import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import "./index.css";
import ENDPOINTS from "./utils/api/endpoints.js";
import App from "./App";
import Category from "./pages/Category";
import ErrorPage from "./pages/ErrorPage";


import RecipeYoutubePlayer from "./components/RecipeYoutubePlayer";
import RecipeInstructions from "./components/RecipeInstructions";
import RecipeIngredients from "./components/RecipeIngredients";
import Catalog from "./pages/Catalog";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const LazyRecipe = lazy(()=> import( "./pages/Recipe" ))
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Catalog />,
          loader: async () => {
            return fetch(ENDPOINTS.CATEGORIES);
          },
        },
        {
          path: "/:categoryName",
          element: <Category />,
          loader: ({ params }) => {
            return fetch(`${ENDPOINTS.FILTER}${params?.categoryName}`);
          },
        },
        {
          path: "/:categoryName/:recipeName/:id",
          element:(<Suspense fallback="loading..."> <LazyRecipe/></Suspense>),
          loader: ({ params }) => {
            return fetch(`${ENDPOINTS.DETAIL}?i=${params?.id}`);
          },
          children: [
            { path: "", element: <Navigate to={"instructions"} /> },
            { path: "ingredients", element: <RecipeIngredients /> },
            { path: "instructions", element: <RecipeInstructions /> },
            { path: "youtube", element: <RecipeYoutubePlayer /> },
          ],
        },
      ],
    },
  ],

  { path: "*", element: <ErrorPage /> }
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

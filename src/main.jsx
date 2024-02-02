import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesPage from "./pages/movies.jsx";
import DetailMoviePage from "./pages/detailMovie.jsx";
import ErrorPage from "./pages/404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <DetailMoviePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

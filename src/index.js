import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Artist from "./Pages/Artist";
import Library from "./Pages/Library";
import Questions from "./Pages/Questions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/artist",
        element: <Artist />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

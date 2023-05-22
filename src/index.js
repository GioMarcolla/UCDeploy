import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Home, Chat, Map, Profile } from "Pages";
import { MainLayout } from "Layouts";

let Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: "/profile",
    element: <MainLayout><Profile /></MainLayout>,
  },
  {
    path: "/chat",
    element: <MainLayout><Chat /></MainLayout>,
  },
  {
    path: "/map",
    element: <MainLayout><Map /></MainLayout>,
  },
  {
    path: "/home",
    element: <MainLayout><Home /></MainLayout>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

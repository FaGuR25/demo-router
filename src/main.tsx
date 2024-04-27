import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile.tsx";
import Mario from "./components/Mario.tsx";
import Luigi from "./components/Luigi.tsx";
import DefaultProfile from "./components/DefaultProfile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
    children:[
      { index: true, element:<DefaultProfile />},
      { path: "mario", element: <Mario />},
      { path: "luigi", element: <Luigi />,}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

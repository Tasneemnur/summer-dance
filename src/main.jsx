import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/main";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
      path: "/",
      element: <Home></Home>,
      },
      {
      path: "/login",
      element: <Login></Login>,
      },
      {
      path: "/register",
      element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="md:w-5/6 mx-auto">
    <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/main";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AuthProvider from "./Provider/AuthProvider";
import Dashboard from "./layout/Dashboard/Dashboard";
import MyClasses from "./Pages/Dashboard/MyClasses/MyClasses";
import AddAClass from "./Pages/Dashboard/AddAClass/AddAClass";
import ManageClasses from "./Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "./Pages/Dashboard/ManageUsers/ManageUsers";
import SelectedClasses from "./Pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "./Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient()

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
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/addAClass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "/dashboard/myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "/dashboard/manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "/dashboard/enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className="md:w-[1100px] mx-auto">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

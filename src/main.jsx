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
import Feedback from "./Pages/Dashboard/Feedback/Feedback";
import Classes from "./Pages/Classes/Classes";
import Instructors from "./Pages/Instructors/Instructors";
import Payment from "./Pages/Dashboard/Payment/Payment";
import PaymentHistory from "./Pages/Dashboard/PaymentHistory/PaymentHistory";

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
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
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
      {
        path: "/dashboard/feedback/:id",
        element: <Feedback></Feedback>,
        loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`http://localhost:5000/carts/${params.id}`)
      },
      {
        path: "/dashboard/payments",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className="md:w-[1050px] mx-auto">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

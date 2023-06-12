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
import PrivateRoute from "./Routes/PrivateRoute";
import DashMain from "./Pages/Dashboard/DashMain/DashMain";
import InstructorRoute from "./Routes/InstructorRoute";
import AdminRoute from "./Routes/AdminRoute";

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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <DashMain></DashMain>,
      },
      {
        path: "/dashboard/addAClass",
        element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>,
      },
      {
        path: "/dashboard/myClasses",
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>,
      },
      {
        path: "/dashboard/manageClasses",
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
      },
      {
        path: "/dashboard/manageUsers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
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
        element: <AdminRoute><Feedback></Feedback></AdminRoute>,
        loader: ({params}) => fetch(`https://assignment-12-summer-dance-server.vercel.app/classes/${params.id}`)
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`https://assignment-12-summer-dance-server.vercel.app/carts/${params.id}`)
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
    <div className="md:w-[1050px] md:mx-auto">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

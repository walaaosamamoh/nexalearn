import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/default/Home";
import NotFound from "../pages/NotFound";
import Welcome from "../pages/Welcome";
import Courses from "../pages/default/Courses";
import About from "../pages/default/About";
import Contact from "../pages/default/Contact";
import CourseDetails from "../pages/default/CourseDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoutes from "../components/auth/ProtectedRoutes";
import Learning from "../pages/dashboard/Learning";
import MyCourses from "../pages/dashboard/MyCourses";
import Certificates from "../pages/dashboard/Certificates";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/learn/:id",
            element: <Learning />,
          },
          {
            path: "/my-courses",
            element: <MyCourses />,
          },
          {
            path: "/certificates",
            element: <Certificates />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

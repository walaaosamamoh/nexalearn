import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/default/Home";
import NotFound from "../pages/NotFound";
import Welcome from "../pages/Welcome";
import Courses from "../pages/default/Courses";

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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

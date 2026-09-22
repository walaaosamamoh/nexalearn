import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/default/Home";
import NotFound from "../pages/NotFound";
import Welcome from "../pages/Welcome";
import Courses from "../pages/default/Courses";
import About from "../pages/default/About";
import Contact from "../pages/default/Contact";

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
    path: "*",
    element: <NotFound />,
  },
]);

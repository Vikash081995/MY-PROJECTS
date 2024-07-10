import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/DashboardLayout";
import ErrorPage from "./pages/Error";
import { Bookmarks, Youtube, Courses, Para } from "./pages";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RootLayout />
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />
      },
      {
        path: "/courses",
        element: <Courses />
      },
      {
        path: "/para",
        element: <Para />
      },
      {
        path: "/youtube",
        element: <Youtube />
      }
    ]
  }
]);

export default router;

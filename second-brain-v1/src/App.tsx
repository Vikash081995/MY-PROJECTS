import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Layout";
import ErrorPage from "./pages/Error";
import { Bookmarks, Youtube, Courses, Para } from "./pages";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navbar />
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
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

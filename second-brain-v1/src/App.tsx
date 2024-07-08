import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Layout";
import ErrorPage from "./pages/Error";
import {
  Bookmarks,
  Youtube,
  Courses,
  Para,
  Preview,
  Login,
  Register
} from "./pages";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
import { MyTheme } from "./theme/MyTheme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />
      },
      {
        path: "/preview",
        element: <Preview />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
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
      <ThemeProvider theme={MyTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;

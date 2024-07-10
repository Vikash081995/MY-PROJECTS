import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Bookmarks,
  Youtube,
  Para,
  Preview,
  Login,
  Register,
  Courses,
  SecondBrainHome,
  ErrorPage,
  RootLayout,
  DashboardLayout
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
        path: "preview",
        element: <Preview />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <SecondBrainHome />
          },
          {
            path: "/bookmarks",
            element: <Bookmarks />
          },
          {
            path: "/para",
            element: <Para />
          },
          {
            path: "/bookmarks",
            element: <Bookmarks />
          },
          {
            path: "/youtube",
            element: <Youtube />
          },
          {
            path: "/courses",
            element: <Courses />
          }
        ]
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

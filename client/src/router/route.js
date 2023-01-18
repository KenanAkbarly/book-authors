import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Books from "../pages/Books/Books";
import Authors from "../pages/Authors/Authors";
import MainRoot from "../pages/MainRoot";
import Add from "../pages/Add/Add";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/author",
        element: <Authors />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/book",
        element: <Books />,
      },
      {
        path: "/add",
        element: <Add />,
      },
    ],
  },
]);
export default router
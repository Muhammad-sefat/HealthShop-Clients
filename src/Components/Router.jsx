import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Home from "../Pages/Home";
import Register from "./Register";
import Shop from "../Pages/Shop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;

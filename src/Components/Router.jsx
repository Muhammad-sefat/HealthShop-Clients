import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Register from "./Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Home from "../Pages/Home";
import Register from "./Register";
import Shop from "../Pages/Shop";
import SpecificCategoryCard from "../Pages/SpecificCategoryCard";
import CartPage from "../Pages/CartPage";
import PaymentPage from "../Pages/PaymentPage";
import DashboardLayout from "../Pages/DashboardLayout";
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
      {
        path: "/specific-category/:category",
        element: <SpecificCategoryCard />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/payment-page",
        element: <PaymentPage />,
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
  { path: "/dashboard", element: <DashboardLayout /> },
]);
export default router;

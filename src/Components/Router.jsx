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
import ManageUser from "../Pages/Dashboard/AdminRoute/ManageUser";
import ManageCategory from "../Pages/Dashboard/AdminRoute/ManageCategory";
import PaymentManagement from "../Pages/Dashboard/AdminRoute/PaymentManagement";
import SalseReport from "../Pages/Dashboard/AdminRoute/SalseReport";
import ManageAdvertisement from "../Pages/Dashboard/AdminRoute/ManageAdvertisement";
import ManageMedicine from "../Pages/Dashboard/SellerRoute/ManageMedicine";
import PaymentHistory from "../Pages/Dashboard/SellerRoute/PaymentHistory";
import Advertisement from "../Pages/Dashboard/SellerRoute/Advertisement";
import AddReview from "../Pages/Dashboard/UserRoute/AddReview";
import AddMedicine from "../Pages/AddMedicine";
import PrivateRoute from "../Provider/PrivateRoute";
import JoinUs from "../Pages/JoinUs";
import Profile from "../Pages/Dashboard/CommonRoute/Profile";
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
        path: "/join-us",
        element: (
          <PrivateRoute>
            {" "}
            <JoinUs />
          </PrivateRoute>
        ),
      },
      {
        path: "/specific-category/:category",
        element: (
          <PrivateRoute>
            <SpecificCategoryCard />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart-page",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-page",
        element: <PaymentPage />,
      },
      {
        path: "/add-medicine",
        element: <AddMedicine />,
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <ManageUser />,
      },
      {
        path: "manage-category",
        element: <ManageCategory />,
      },
      {
        path: "payment-management",
        element: <PaymentManagement />,
      },
      {
        path: "salse-report",
        element: <SalseReport />,
      },
      {
        path: "manage-advertisement",
        element: <ManageAdvertisement />,
      },
      {
        path: "manage-medicine",
        element: <ManageMedicine />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "advertisement",
        element: <Advertisement />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
export default router;

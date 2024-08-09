import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useAuth from "../Hooks/useAuth";
import CheckoutForm from "./CheckOutForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);

const PaymentPage = () => {
  const { user } = useAuth();
  const location = useLocation();
  const { totalPrice, cartItems } = location.state || {};
  return (
    <div>
      <p className="text-4xl font-semibold text-blue-500"> Your Payment</p>
      <div className="max-w-md mx-auto border border-blue-500 my-8 text-left p-8 sm:space-x-6 shadow-xl dark:bg-gray-50 dark:text-gray-800 rounded">
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-xl font-semibold">
              Name : {user?.displayName}
            </h2>
            <p className="text-lg  py-2 dark:text-gray-600">
              <span className="text-xl font-semibold"> email :</span>{" "}
              {user?.email}
            </p>
            <p className="text-lg  py-2 dark:text-gray-600">
              <span className="text-xl font-semibold"> Total Price :</span> $
              {totalPrice}
            </p>

            <Elements stripe={stripePromise}>
              <CheckoutForm
                price={totalPrice}
                user={user}
                cartItems={cartItems}
              />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckOutForm.css";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
const CheckoutForm = ({ Info }) => {
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  //   const getSecretClientData = async (priceString) => {
  //     const price = extractPrice(priceString);
  //     try {
  //       const { data } = await axiosPublic.post("/create-payment-intent", {
  //         price,
  //       });
  //       if (data && data.clientSecret) {
  //         setClientSecret(data.clientSecret);
  //       } else {
  //         console.error("Invalid response data:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching client secret:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     getSecretClientData(Info?.price);
  //   }, [Info]);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     console.log(clientSecret);
  //     setProcessing(true);

  //     if (!stripe || !elements) {
  //       console.log("Stripe or elements not loaded");
  //       setProcessing(false);
  //       return;
  //     }

  //     const card = elements.getElement(CardElement);

  //     if (card == null) {
  //       console.log("Card element not found");
  //       setProcessing(false);
  //       return;
  //     }

  //     console.log("Creating payment method...");
  //     const { error, paymentMethod } = await stripe.createPaymentMethod({
  //       type: "card",
  //       card,
  //     });

  //     if (error) {
  //       console.log("[error]", error);
  //       setCardError(error.message);
  //       setProcessing(false);
  //       return;
  //     } else {
  //       console.log("[PaymentMethod]", paymentMethod);
  //       setCardError("");
  //     }

  //     console.log("Confirming card payment...");
  //     const { paymentIntent, error: confirmError } =
  //       await stripe.confirmCardPayment(clientSecret, {
  //         payment_method: {
  //           card: card,
  //           billing_details: {
  //             name: user?.displayName || "anonymous",
  //             email: user?.email || "anonymous",
  //           },
  //         },
  //       });

  //     if (confirmError) {
  //       console.error("[confirmError]", confirmError);
  //       setCardError(confirmError.message);
  //       setProcessing(false);
  //       return;
  //     }

  //     if (paymentIntent.status === "succeeded") {
  //       const paymentInfo = {
  //         ...Info,
  //         trainerId: Info._id,
  //         transactionId: paymentIntent.id,
  //         date: new Date(),
  //       };

  //       try {
  //         const { data } = await axiosPublic.post("/payment", paymentInfo);
  //         console.log("Payment data saved:", data);
  //         toast.success("Trainer Booked & Payment Successfully");
  //         navigate("/all-trainers");
  //       } catch (error) {
  //         console.error("Error saving payment info:", error);
  //       }
  //     } else {
  //       console.log("Payment intent status:", paymentIntent.status);
  //     }

  //     setProcessing(false);
  //   };

  return (
    <>
      <form>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex mt-2 justify-around">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            Confirm
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-pink-200 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 my-2">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;

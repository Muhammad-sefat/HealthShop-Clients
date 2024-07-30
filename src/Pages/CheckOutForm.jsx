// CheckOutForm.js
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const CheckoutForm = ({ price, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const getSecretClientData = async () => {
      try {
        const { data } = await axiosPublic.post("/create-payment-intent", {
          price: price,
        });
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    getSecretClientData();
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      console.log("Stripe or elements not loaded");
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      console.log("Card element not found");
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name: user?.displayName || "anonymous",
        email: user?.email || "anonymous",
      },
    });

    if (error) {
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        price,
        userId: user._id,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      try {
        const { data } = await axiosPublic.post("/payment", paymentInfo);
        toast.success("Payment Successful");
        navigate("/confirmation-page"); // Redirect to a confirmation page
      } catch (error) {
        console.error("Error saving payment info:", error);
      }
    }

    setProcessing(false);
  };
  const handleCancel = () => {
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <div className="flex mt-6 justify-around">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            disabled={!stripe || processing}
          >
            {processing ? "Processing..." : "Confirm"}
          </button>
          <button
            onClick={handleCancel}
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

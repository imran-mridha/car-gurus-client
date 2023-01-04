import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  // const [success, setSuccess] = useState("");
  const [tranjectionId, setTranjectionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { price, email, patient, _id, productId } = booking;

  const navigate = useNavigate();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    // setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        tranjectionId: tranjectionId,
        email,
        bookingId: _id,
        productId: productId,
      };

      // store payment info in the database

      fetch(`${process.env.REACT_APP_API_URL}/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            // setSuccess("Congrats! Your Pyment Completed");
            toast.success("Congrats! Your Pyment Completed", {
              autoClose: 500,
            });
            setTranjectionId(paymentIntent.id);
            navigate("/dashboard/my-orders");
          }
        });
    }

    setProcessing(false);
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border border-gray-200 rounded-lg p-5"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#3A4256",
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
        <button
          className="btn w-full bg-primary border border-primary hover:bg-secondary hover:border-secondary mt-10"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
    </div>
  );
};

export default CheckoutForm;

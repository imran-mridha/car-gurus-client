import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData,useNavigation  } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import Loader from "../../../Shared/Loader/Loader";
import CheckoutForm from "./CheckOut";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();

  const navigation = useNavigation();

  const { name, price} = booking;

  if(navigation.state === "loading"){
    return <Loader />
  }
  // console.log(booking);
  return (
    <div className="bg-white w-6/12 mx-auto my-20 p-10 rounded-lg">
      <h2 className="text-3xl text-center">Payment for {name}</h2>
      <p className="text-center mt-2">
        Please pay <strong className="text-primary">${price}</strong> for your order.
      </p>
      <div className="w-96 my-10 text-center mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

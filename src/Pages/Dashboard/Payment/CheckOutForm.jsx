import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError]=useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('error', error);
        setCardError(error.message)
      } else {
        setCardError("")
        console.log('PaymentMethod', paymentMethod);
      }
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
      <button className="btn bg-orange-600 hover:bg-orange-700 text-white mt-5 btn-sm" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    <p className="text-red-600 mt-3">{cardError}</p>
    </>
  );
};

export default CheckOutForm;

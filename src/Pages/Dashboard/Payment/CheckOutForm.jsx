import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckOutForm = ({cartClass, price}) => {
  const {user} = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }
}, [price, axiosSecure])

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
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
              },
          },
      },
  );

    if(confirmError){
      console.log(confirmError)
    }
    console.log('payment intent', paymentIntent)
    setProcessing(false)


    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        classId: cartClass.classId,
        classImage: cartClass.classImage,
        className: cartClass.className,
        availableSeats: cartClass.availableSeats,
        instructorName: cartClass.instructorName,
        selectedClassId: cartClass._id
    }
    axiosSecure.post('/payments', payment)
        .then(res => {
            console.log(res.data);
            if (res.data.result.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Congratulations. Welcome to Summer Dance",
                showConfirmButton: false,
                timer: 1500,
              });
            }
        })
   }
  }
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
        <button
          className="btn hover:bg-orange-700 bg-orange-600 text-white btn-sm mt-6"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 mt-3">{cardError}</p>}
      {transactionId && <p className="text-green-600 mt-5">Transaction completed successfully.</p>}
    </>
  );
};

export default CheckOutForm;

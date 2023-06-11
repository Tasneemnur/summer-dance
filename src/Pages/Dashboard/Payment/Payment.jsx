import Title from "../../../Shared/Title/Title";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51NHY8RAbpYs8wPJ2tL9p17INrMgbhrD4fo7bS2oy9YMxSbDW0iNsK5T3lsnYJvTRkD3gmUs3CRMgSAX78HljBQK60016mn2oYy');
console.log(stripePromise)
const Payment = () => {
  const cartClass = useLoaderData();
  console.log(cartClass)
  const price = cartClass.price;

  return (
    <div>
      <Title
        heading="Please Pay"
        subHeading="Pay and enjoy your summer in the best way possible"
      ></Title>
      <Elements stripe={stripePromise}>
        <CheckOutForm cartClass={cartClass} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;

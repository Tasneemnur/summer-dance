import Title from "../../../Shared/Title/Title";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
            <Title heading="Please Pay" subHeading="Pay and enjoy your summer in the best way possible"></Title>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;
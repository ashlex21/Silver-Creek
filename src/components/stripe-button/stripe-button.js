import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //cuz stripe takes payments in cents

  const publishableKey =
    "pk_test_51IWBs9JodcvB4pbzd3fjE8DBRF3DvmjEQSP31BooUT8wZ7xYqSHKkUuUTAxoKYqeiRdtE2Dk5asfZwvHVZhuqxTc00eBUNyCTo";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      currency="INR"
      name="Silver Creek"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total amount is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Right Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

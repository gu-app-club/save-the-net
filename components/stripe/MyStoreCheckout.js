import React from "react";
import { Elements } from "react-stripe-elements-universal";

import CheckoutForm from "./CheckoutForm";

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <CheckoutForm />
      </Elements>
    );
  }
}

export default MyStoreCheckout;

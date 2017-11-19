import React from "react";
import { StripeProvider } from "react-stripe-elements-universal";

import MyStoreCheckout from "../components/stripe/MyStoreCheckout";

export default () => {
  return (
    <div>
      <script src="https://js.stripe.com/v3/" />
      <StripeProvider apiKey="pk_test_12345">
        <MyStoreCheckout />
      </StripeProvider>
    </div>
  );
};

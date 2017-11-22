const constants = require("../../constants");
const stripe = require("stripe")(constants.STRIPE_PRIVATE_KEY);

function purchase(price, token) {
  let response = { error: null, charge: null };

  let wait = true;
  stripe.charges.create(
    {
      amount: price,
      currency: "usd",
      description: "savethenet.today",
      source: token
    },
    function(err, charge) {
      response.error = err;
      response.charge = charge;
      wait = false;
    }
  );

  while (wait) {
    require("deasync").runLoopOnce();
  }
  return response;
}

module.exports = { purchase };

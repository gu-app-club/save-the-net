const stripe = require("stripe")("sk_test_gOtKtBSsil3L6AWnpLPTvagI");

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

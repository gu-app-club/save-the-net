const stripe = require("stripe")("sk_test_gOtKtBSsil3L6AWnpLPTvagI");

function purchase(price, token) {
  stripe.charges.create(
    {
      amount: price,
      currency: "usd",
      description: "Example charge",
      source: token
    },
    function(err, charge) {
      if (err) console.log(err);
      if (charge) console.log(charge);
    }
  );
}

module.exports = { purchase };

const zipcodes = require("zipcodes2016");
const representatives = require("./utils/representatives");
const template = require("./templates/template");
const Lob = require("lob")("test_7baea6cc03130384038e90b624d4a3a11b1");

const payment = require("./utils/payment");

function lob(user, rep) {
  let response = null;

  let message = user.message.replace(/['"]+/g, "");
  Lob.letters.create(
    {
      description: user.name,
      to: {
        name: rep.name,
        address_zip: rep.address[0].zip,
        address_line1: rep.address[0].line1,
        address_line2: rep.address[0].line2 || "",
        address_city: rep.address[0].city,
        address_state: rep.address[0].state,
        address_country: "US"
      },
      from: {
        name: user.name,
        address_zip: user.address_zip,
        address_line1: user.address_line1,
        address_line2: user.address_line2,
        address_city: user.address_city,
        address_state: user.address_state,
        address_country: "US"
      },
      file: template,
      merge_variables: {
        rep: rep.name,
        name: user.name,
        city: user.address_city,
        message:
          message ||
          `I'm writing to express my disapproval that the FCC is trying to kill net neutrality and the strong Title II oversight of Internet Service Providers. Preserving an open internet is crucial for fair and equal access to the resources and information available on it.`
      },
      color: false
    },
    (err, res) => {
      response = { error: err, response: res };
    }
  );

  while (response == null) {
    require("deasync").runLoopOnce();
  }
  return response;
}

function send(request, response) {
  let zipinfo = zipcodes.lookup(request.body.zip);
  console.log(request.body);
  if (!zipinfo) {
    console.log("Invalid zip code: " + request.body.zip);
    response.send({
      success: false,
      message: "Invalid zip code: " + request.body.zip
    });
    return;
  }

  let requestData = {
    name: request.body.name,
    address_zip: request.body.zip,
    address_line1: request.body.address_line1 || "Gonzaga Universtiy",
    address_line2: request.body.address_line2,
    address_city: zipinfo.city,
    address_state: zipinfo.state,
    address_country: "US",
    message:
      request.body.message ||
      "I'm writing to express my disapproval that the FCC is trying to kill net neutrality and the strong Title II oversight of Internet Service Providers. Preserving an open internet is crucial for fair and equal access to the resources and information available on it.",
    token: request.body.token || "",
    reps: request.body.reps || Array(0)
  };

  if (!requestData.reps.length) {
    response.send({
      success: false,
      message: "No representatives selected."
    });
    return;
  }

  if (!requestData.name.length) {
    response.send({
      success: false,
      message: "Name cannot be empty."
    });
    return;
  }

  console.log("hello");

  representatives.lookup(requestData.address_zip).then(({ allReps, err }) => {
    if (err || !allReps.length) {
      console.dir(err || "No reps.");
      response.send({
        success: false,
        message: "Could not locate reps from " + requestData.address_state
      });
      return;
    }

    let reps = allReps.filter(function(r) {
      for (let rep of requestData.reps) {
        if (rep.name == r.name) return r;
      }
    });

    if (!reps.length) {
      response.send({
        success: false,
        message: "No representatives selected."
      });
      return;
    }

    let purchase = payment.purchase(
      150 * requestData.reps.length,
      requestData.token
    );
    if (purchase.error) {
      console.log(purchase.error);
      response.send({
        success: false,
        message: "Payment failed."
      });
      return;
    }

    let urls = Array();
    for (let rep of reps) {
      let lobRes = lob(requestData, rep);
      if (lobRes.error) {
        console.log(error);
        respones.send({
          success: false,
          message: "An unexpected error has occurred."
        });
        return;
      }
      urls.push(lobRes.response.url);
    }
    response.send({
      success: true,
      reps: reps,
      urls: urls
    });
  });
}

module.exports = {
  send,
  lob
};

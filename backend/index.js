const zipcodes = require("./utils/zipcodes");
const templateMessage = require("fs")
  .readFileSync("./backend/templates/net-neutrality-message.html")
  .toString();
const templateNoMessage = require("fs")
  .readFileSync("./backend/templates/net-neutrality-no-message.html")
  .toString();
const states = require("./rep.json");
const Lob = require("lob")("test_7baea6cc03130384038e90b624d4a3a11b1");

function getReps(state) {
  for (let s of states) {
    if (s.name == state) {
      return s.reps;
    }
  }
}

function lob(user, rep) {
  let response = null;

  Lob.letters.create(
    {
      description: user.name,
      to: {
        name: rep.name,
        address_zip: rep.address.address_zip,
        address_line1: rep.address.address_line1,
        address_line2: rep.address.address_line2,
        address_city: rep.address.address_city,
        address_state: rep.address.address_state,
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
      file: user.message ? templateMessage : templateNoMessage,
      merge_variables: {
        rep: rep.name,
        name: user.name,
        city: user.address_city,
        message: user.message
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
    message: request.body.message
  };

  let reps = getReps(requestData.address_state);

  if (!reps) {
    console.log("Could not locate reps from " + requestData.address_state);
    response.send({
      success: false,
      message: "Could not locate reps from " + requestData.address_state
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
}
module.exports = {
  send,
  lob,
  getReps
};

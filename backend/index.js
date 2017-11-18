const zipcodes = require("zipcodes");
const templateMessage = require("fs")
  .readFileSync("./backend/templates/net-neutrality-message.html")
  .toString();
const templateNoMessage = require("fs")
  .readFileSync("./backend/templates/net-neutrality-no-message.html")
  .toString();
const states = require("./rep.json");

const Lob = require("lob")("test_7baea6cc03130384038e90b624d4a3a11b1");

function getReps(state) {
  for (s of states) {
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

  let urls = Array();
  for (rep of reps) {
    let lobRes = lob(requestData, rep);
    urls.push(lobRes.response.url);
  }
  response.send(urls.join("\n"));
}
module.exports = {
  send
};

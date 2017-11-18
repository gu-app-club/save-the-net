const zipcodes = require("zipcodes");
const templateMessage = require("fs")
  .readFileSync("./backend/templates/net-neutrality-message.html")
  .toString();
const templateNoMessage = require("fs")
  .readFileSync("./backend/templates/net-neutrality-no-message.html")
  .toString();

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

  let Lob = require("lob")("test_7baea6cc03130384038e90b624d4a3a11b1");
  Lob.letters.create(
    {
      description: requestData.name,
      to: {
        name: "Harry Zhang",
        address_line1: "185 Berry St",
        address_line2: "# 6100",
        address_city: "San Francisco",
        address_state: "CA",
        address_zip: "94107",
        address_country: "US"
      },
      from: {
        name: requestData.name,
        address_zip: requestData.address_zip,
        address_line1: requestData.address_line1,
        address_line2: requestData.address_line2,
        address_city: requestData.address_city,
        address_state: requestData.address_state,
        address_country: "US"
      },
      file: requestData.message ? templateMessage : templateNoMessage,
      merge_variables: {
        rep: "Greg Walden",
        name: requestData.name,
        city: requestData.address_city,
        message: requestData.message
      },
      color: true
    },
    function(err, res) {
      response.send(res.url);
    }
  );
}
module.exports = {
  send
};

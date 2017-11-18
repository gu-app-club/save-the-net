const fetch = require("node-fetch");

function lookup(zipcode) {
  const url =
    "http://maps.googleapis.com/maps/api/geocode/json?address=" +
    zipcode +
    "&sensor=true";

  let result = null;
  fetch(url)
    .then(response => {
      response.json().then(json => {
        let state = null;
        let city = null;
        for (let element of json.results[0].address_components) {
          if (element.types[0] == "administrative_area_level_2")
            city = element.long_name;
          if (element.types[0] == "administrative_area_level_1")
            state = element.short_name;
          if (
            element.types[0] == "postal_code" &&
            element.long_name != zipcode
          ) {
            result = false;
            return;
          }
        }
        if (!city || !state) {
          result = false;
          return;
        }
        result = { city: city, state: state };
      });
    })
    .catch(error => {
      let state = error;
    });

  while (result == null) {
    require("deasync").runLoopOnce();
  }
  return result;
}

module.exports = { lookup };

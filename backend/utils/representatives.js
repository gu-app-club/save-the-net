const fetch = require("node-fetch");

function lookup(zipcode) {
  const url =
    "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAJeOUUNN_QwQNUwuj1nK2WkywtIL2EQ5s&address=" +
    zipcode;

  let result = new Array();
  let wait = true;
  fetch(url)
    .then(response => {
      response.json().then(json => {
        try {
          let indices = Array;
          for (let office of json.offices) {
            if (office.name.indexOf("Representatives") > -1) {
              indices = office.officialIndices;
              break;
            }
          }
          if (!indices.length) {
            wait = false;
          }
          for (let index of indices) {
            result.push(json.officials[index]);
          }
          wait = false;
        } catch (error) {
          console.log(error);
          wait = false;
        }
      });
    })
    .catch(error => {
      console.log(error);
      wait = false;
    });

  while (wait) {
    require("deasync").runLoopOnce();
  }
  return result;
}

module.exports = { lookup };

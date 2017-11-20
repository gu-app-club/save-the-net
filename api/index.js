import got from "got";

export const sendLetter = (message, zip, address_line1, name, token, reps) => {
  return got("/api/send", {
    body: {
      message,
      zip,
      address_line1,
      name,
      token,
      reps
    },
    json: true
  }).then(response => {
    if (!response.body.success) {
      return { data: false, err: response.body.message };
    }

    return { data: response.body, err: false };
  });
};

export const getReps = zipcode => {
  let result = new Array();

  return got(
    "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAJeOUUNN_QwQNUwuj1nK2WkywtIL2EQ5s&address=" +
      zipcode
  ).then(response => {
    const json = JSON.parse(response.body);
    if (json.error) {
      return {
        data: false,
        err: "Sorry, we could not find any representatives near that zipcode."
      };
    }

    let indices = Array;
    for (let office of json.offices) {
      if (
        office.name.indexOf("Representatives") > -1 ||
        office.name.indexOf("Senate") > -1
      ) {
        indices = office.officialIndices;
        break;
      }
    }
    if (!indices.length) {
      return {
        data: false,
        err: "Sorry, we could not find any representatives near that zipcode."
      };
    }
    for (let index of indices) {
      result.push(json.officials[index]);
    }

    return { data: result, err: false };
  });
};

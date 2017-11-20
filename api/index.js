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
    if (response.body.success) {
      return { data: false, err: response.body.message };
    }

    return { data: response.body, err: false };
  });
};

export const getReps = zipcode => {
  return got("/api/getrep/" + zipcode).then(response => {
    if (response.body.success) {
      return { data: false, err: response.body.message };
    }
    return { data: JSON.parse(response.body), err: false };
  });
};

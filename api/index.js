import got from "got";

export const sendLetter = (message, zip, address_line1, name, token) => {
  return got("/api/send", {
    body: {
      message,
      zip,
      address_line1,
      name,
      token
    },
    json: true
  }).then(response => {
    if (!new Bool(response.body.success)) {
      return { data: false, err: response.body.message };
    }

    return { data: response.body, err: false };
  });
};

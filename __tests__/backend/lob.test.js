const backend = require("../../backend");

const expectedMessage = {
  error: null,
  response: {
    description: "Max Chehab",
    metadata: {},
    to: {
      description: null,
      name: "Kurt Schrader",
      company: null,
      phone: null,
      email: null,
      address_line1: "2431 Cannon House Office Building",
      address_line2: "27 Independence Ave SE",
      address_city: "Washington",
      address_state: "DC",
      address_zip: "20003",
      address_country: "UNITED STATES",
      metadata: {},
      deleted: true,
      object: "address"
    },
    from: {
      description: null,
      name: "MAX CHEHAB",
      company: null,
      phone: null,
      email: null,
      address_line1: "19354 SEATON LOOP",
      address_line2: "",
      address_city: "BEND",
      address_state: "OR",
      address_zip: "97702-2996",
      address_country: "UNITED STATES",
      metadata: {},
      deleted: true,
      object: "address"
    },
    color: false,
    double_sided: true,
    address_placement: "top_first_page",
    return_envelope: false,
    perforated_page: null,
    extra_service: null,
    mail_type: "usps_first_class",
    template_id: null,
    template_version_id: null,
    carrier: "USPS",
    tracking_number: null,
    tracking_events: [],
    object: "letter"
  }
};

const expectedNoMessage = {
  error: null,
  response: {
    description: "Max Chehab",
    metadata: {},
    to: {
      description: null,
      name: "Kurt Schrader",
      company: null,
      phone: null,
      email: null,
      address_line1: "2431 Cannon House Office Building",
      address_line2: "27 Independence Ave SE",
      address_city: "Washington",
      address_state: "DC",
      address_zip: "20003",
      address_country: "UNITED STATES",
      metadata: {},
      deleted: true,
      object: "address"
    },
    from: {
      description: null,
      name: "MAX CHEHAB",
      company: null,
      phone: null,
      email: null,
      address_line1: "19354 SEATON LOOP",
      address_line2: "",
      address_city: "BEND",
      address_state: "OR",
      address_zip: "97702-2996",
      address_country: "UNITED STATES",
      metadata: {},
      deleted: true,
      object: "address"
    },
    color: false,
    double_sided: true,
    address_placement: "top_first_page",
    return_envelope: false,
    perforated_page: null,
    extra_service: null,
    mail_type: "usps_first_class",
    template_id: null,
    template_version_id: null,
    carrier: "USPS",
    tracking_number: null,
    tracking_events: [],
    object: "letter"
  }
};

test("Checking message", () => {
  expect(
    backend.lob(
      {
        name: "Max Chehab",
        address_zip: "97702",
        address_line1: "19354 SW Seaton Loop",
        address_city: "Deschutes County",
        address_state: "OR",
        address_country: "US",
        message: "Please listen to the people!"
      },
      {
        name: "Kurt Schrader",
        address: {
          address_zip: "20003",
          address_line1: "2431 Cannon House Office Building",
          address_line2: "27 Independence Ave SE",
          address_city: "Washington",
          address_state: "DC",
          address_country: "US"
        },
        phone: "202-225-5711"
      }
    )
  ).toMatchObject(expectedMessage);
});

test("Checking no message", () => {
  expect(
    backend.lob(
      {
        name: "Max Chehab",
        address_zip: "97702",
        address_line1: "19354 SW Seaton Loop",
        address_city: "Deschutes County",
        address_state: "OR",
        address_country: "US",
        message: ""
      },
      {
        name: "Kurt Schrader",
        address: {
          address_zip: "20003",
          address_line1: "2431 Cannon House Office Building",
          address_line2: "27 Independence Ave SE",
          address_city: "Washington",
          address_state: "DC",
          address_country: "US"
        },
        phone: "202-225-5711"
      }
    )
  ).toMatchObject(expectedNoMessage);
});

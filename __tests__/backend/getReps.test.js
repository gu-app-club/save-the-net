const backend = require("../../backend");

const expectedOregon = [
  {
    address: {
      address_city: "Washington",
      address_country: "US",
      address_line1: "439 Cannon House Office Building",
      address_line2: "27 Independence Ave SE",
      address_state: "DC",
      address_zip: "20003"
    },
    name: "Suzanne Bonamici",
    phone: "202-225-0855"
  },
  {
    address: {
      address_city: "Washington",
      address_country: "US",
      address_line1: "2185 Cannon House Office Building",
      address_line2: "27 Independence Ave SE",
      address_state: "DC",
      address_zip: "20003"
    },
    name: "Greg Walden",
    phone: "202-225-6730"
  },
  {
    address: {
      address_city: "Washington",
      address_country: "US",
      address_line1: "1111 Longworth House Office Building",
      address_line2: "9 Independence Ave SE",
      address_state: "DC",
      address_zip: "20515"
    },
    name: "Earl Blumenauer",
    phone: "202-225-4811"
  },
  {
    address: {
      address_city: "Washington",
      address_country: "US",
      address_line1: "2134 Cannon House Office Building",
      address_line2: "27 Independence Ave SE",
      address_state: "DC",
      address_zip: "20003"
    },
    name: "Peter DeFazio",
    phone: "202-225-6416"
  },
  {
    address: {
      address_city: "Washington",
      address_country: "US",
      address_line1: "2431 Cannon House Office Building",
      address_line2: "27 Independence Ave SE",
      address_state: "DC",
      address_zip: "20003"
    },
    name: "Kurt Schrader",
    phone: "202-225-5711"
  }
];

const expectedHawaii = [
  {
    address: {
      address_city: "Washington",
      address_country: "US",
      address_line1: "422 Cannon House Office Building",
      address_line2: "27 Independence Ave SE",
      address_state: "DC",
      address_zip: "20003"
    },
    name: "Colleen Hanabusa",
    phone: "202-225-2726"
  },
  {
    address: {
      address_city: "Washington",
      address_country: "US",
      address_line1: "1433 Longworth House Office Building",
      address_line2: "9 Independence Ave SE",
      address_state: "DC",
      address_zip: "20515"
    },
    name: "Tulsi Gabbard",
    phone: "202-225-4906"
  }
];

test("Checking Oregon", () => {
  expect(backend.getReps("OR")).toEqual(expectedOregon);
});

test("Checking Hawaii", () => {
  expect(backend.getReps("HI")).toEqual(expectedHawaii);
});

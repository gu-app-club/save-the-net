const zipcodes = require("../../backend/utils/zipcodes");

test("Checking 97702", () => {
  expect(zipcodes.lookup("97702")).toEqual({
    state: "OR",
    city: "Deschutes County"
  });
});
test("Checking 83702", () => {
  expect(zipcodes.lookup("83702")).toEqual({
    state: "ID",
    city: "Ada County"
  });
});

test("Checking 0", () => {
  expect(zipcodes.lookup("0")).toEqual(false);
});

test("Checking nothing", () => {
  expect(zipcodes.lookup()).toEqual(false);
});

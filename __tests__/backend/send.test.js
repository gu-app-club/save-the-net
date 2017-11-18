const request = require("supertest");
const server = require("../../backend/server");

jest.setTimeout(60000);

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(server)
      .post("/api/send")
      .send({
        name: "Max Chehab",
        zip: "97702",
        address_line1: "19354 SW Seaton Loop",
        message: "Please listen to the people!"
      })
      .type("json");

    expect(JSON.parse(response.text)).toMatchObject({
      success: true,
      reps: [
        {
          name: "Suzanne Bonamici",
          address: {
            address_zip: "20003",
            address_line1: "439 Cannon House Office Building",
            address_line2: "27 Independence Ave SE",
            address_city: "Washington",
            address_state: "DC",
            address_country: "US"
          },
          phone: "202-225-0855"
        },
        {
          name: "Greg Walden",
          address: {
            address_zip: "20003",
            address_line1: "2185 Cannon House Office Building",
            address_line2: "27 Independence Ave SE",
            address_city: "Washington",
            address_state: "DC",
            address_country: "US"
          },
          phone: "202-225-6730"
        },
        {
          name: "Earl Blumenauer",
          address: {
            address_zip: "20515",
            address_line1: "1111 Longworth House Office Building",
            address_line2: "9 Independence Ave SE",
            address_city: "Washington",
            address_state: "DC",
            address_country: "US"
          },
          phone: "202-225-4811"
        },
        {
          name: "Peter DeFazio",
          address: {
            address_zip: "20003",
            address_line1: "2134 Cannon House Office Building",
            address_line2: "27 Independence Ave SE",
            address_city: "Washington",
            address_state: "DC",
            address_country: "US"
          },
          phone: "202-225-6416"
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
      ]
    });
  });
});

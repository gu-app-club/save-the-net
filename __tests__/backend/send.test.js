const request = require("supertest");
const server = require("../../backend/server");

jest.setTimeout(60000);

describe("Testing /api/send", () => {
  test("Testing /api/send", async () => {
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
      reps: [
        {
          address: [
            {
              city: "Washington",
              line1: "2185 Rayburn House Office Building",
              state: "DC",
              zip: "20515"
            }
          ],
          channels: [
            { id: "repgregwalden", type: "Facebook" },
            { id: "repgregwalden", type: "Twitter" },
            { id: "RepGregWalden", type: "YouTube" },
            { id: "108852759737967625278", type: "GooglePlus" }
          ],
          name: "Greg Walden",
          party: "Republican",
          phones: ["(202) 225-6730"],
          photoUrl: "http://bioguide.congress.gov/bioguide/photo/W/W000791.jpg",
          urls: ["http://walden.house.gov/"]
        }
      ],
      success: true
    });
  });
});

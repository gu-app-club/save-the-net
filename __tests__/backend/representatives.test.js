const representatives = require("../../backend/utils/representatives");

const expectedOregon = [
  {
    name: "Greg Walden",
    address: [
      {
        line1: "2185 Rayburn House Office Building",
        city: "Washington",
        state: "DC",
        zip: "20515"
      }
    ],
    party: "Republican",
    phones: ["(202) 225-6730"],
    urls: ["http://walden.house.gov/"],
    photoUrl: "http://bioguide.congress.gov/bioguide/photo/W/W000791.jpg",
    channels: [
      {
        type: "Facebook",
        id: "repgregwalden"
      },
      {
        type: "Twitter",
        id: "repgregwalden"
      },
      {
        type: "YouTube",
        id: "RepGregWalden"
      },
      {
        type: "GooglePlus",
        id: "108852759737967625278"
      }
    ]
  }
];

test("Checking Oregon", () => {
  expect(representatives.lookup("97703")).toEqual(expectedOregon);
});

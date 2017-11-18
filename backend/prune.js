const data = require("fs")
  .readFileSync("/home/maxchehab/Desktop/rep.csv")
  .toString()
  .split("\n");
let states = Array();
for (line of data) {
  let cells = line.split(",");
  if (cells.length == 1) {
    states.push({ name: cells[0], reps: Array() });
  } else {
    let address = null;
    if (cells[3] == "LHOB") {
      address = {
        address_zip: "20515",
        address_line1: cells[2] + " Longworth House Office Building",
        address_line2: "9 Independence Ave SE",
        address_city: "Washington",
        address_state: "DC",
        address_country: "US"
      };
    } else if (cells[3] == "CHOB") {
      address = {
        address_zip: "20003",
        address_line1: cells[2] + " Cannon House Office Building",
        address_line2: "27 Independence Ave SE",
        address_city: "Washington",
        address_state: "DC",
        address_country: "US"
      };
    }
    //Gallagher, Mike,1007,LHOB,202-225-5665
    states[states.length - 1].reps.push({
      name: (cells[1] + " " + cells[0]).replace(/^[ ]+|[ ]+$/g, ""),
      address: address,
      phone: cells[4].replace(/^[ ]+|[ ]+$/g, "")
    });
  }
}

let json = JSON.stringify(states);

require("fs").writeFileSync("/home/maxchehab/Desktop/rep.json", json, "UTF-8");

const next = require("next");
const bodyParser = require("body-parser");

const server = require("./backend/server");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const backend = require("./backend");

app.prepare().then(() => {
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    res.writeHead(301, { Location: "https://www.battleforthenet.com" });
    res.end();
  });
  /* eslint-disable no-console */
  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log("> Server ready on http://localhost:" + port);
  });
});

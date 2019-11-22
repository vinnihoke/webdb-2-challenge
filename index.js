require("dotenv").config();
const { PORT } = process.env;
const server = require("./api/server.js");

server.listen(PORT, () =>
  console.log(`::: Server running on http://localhost:${PORT} :::`)
);

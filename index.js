const server = require("./api/server.js");

const port = 8000;
server.listen(port, () =>
  console.log(`\n ** The server is running on port ${port} ** \n`),
);

// content of adServerHTTP.js

const http = require("http");
const port = 8888;

const requestModule = require("./requestModule");

const server = http.createServer(requestModule.handleRequest);

server.listen(port, "localhost", () =>
{
    console.log(`Started Node.js server, listening on port ${port}.`);
});

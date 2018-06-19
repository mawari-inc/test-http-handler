// content of adServerHTTP.js

const http = require("http");
const port = 8888;

const server = http.createServer((request, response) =>
{
    response.writeHead(200, { "Content-Type" : "text/plain" });

    response.end("Hello from HTTP Ad Server!");

    console.log("Handler requested...");
});

server.listen(port, "localhost", () =>
{
    console.log(`Started Node.js server, listening on port ${port}.`);
});

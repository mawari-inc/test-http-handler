// content of adServerHTTP.js

const http = require("http");
const port = process.env.PORT || 8888;

const requestModule = require("./requestModule");

const server = http.createServer(requestModule.handleRequest);

server.listen(port, () =>
{
    console.log(`Started Rodrigo's Node.js server.\nListening on port ${port}.\n`);
});

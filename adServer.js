// content of adServer.js

const express = require("express");
const port = 7777;

const app = express();

app.use((request, response, next) =>
{
	console.log("Request Headers:\n");
	console.log(request.headers);
	next();
});

app.use((request, response, next) =>
{
	request.randomNumber = Math.random();
	next();
});

app.get("/", (request, response) =>
{
	var json =
	{
		message : "Hello from The Server!!",
		number : request.randomNumber
	};

	console.log(request.url);
	response.json(json);
});

app.listen(port, (err) =>
{
	if (err)
	{
		return console.log("Explosions... error occured: ", err);
	}

	console.log(`Ad Server is listening on ${port}`);
});

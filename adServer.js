// content of adServer.js

const express = require("express");
const port = 7777;

const app = express();

var middleWare1 = (request, response, next) =>
{
	console.log("Request Headers:\n");
	console.log(request.headers);
	next();
};

var middleWare2 = (request, response, next) =>
{
	request.randomNumber = Math.random();
	next();
};

var getFunction = (request, response) =>
{
	var json =
	{
		message : "Hello from The Server!!",
		number : request.randomNumber
	};

	console.log(request.url);
	response.json(json);
};

var listenFunction = (err) =>
{
	if (err)
	{
		return console.log("Explosions... error occured: ", err);
	}

	console.log(`Ad Server is listening on ${port}`);
};

app.use(middleWare1);
app.use(middleWare2);
app.get('/', getFunction);
app.listen(port, listenFunction);

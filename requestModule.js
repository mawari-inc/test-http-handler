let currentOption = "corona";
let currentLanguage = "en";

function handleGetRequest(response)
{
    data = { "option": currentOption, "language": currentLanguage };

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(data));
    response.end();
}

function handlePostRequest(request, response)
{
    var requestBody = "";

    request.on("data", function (data)
    {
        requestBody += data;
        if (requestBody.length > 1e4)
        {
            response.writeHead(413, "Request Entity Too Large", { "Content-Type": "text/plain" });
            response.end("Request Entity Too Large");
        }
    });

    request.on("end", function ()
    {
        var requestData = JSON.parse(requestBody);

        currentOption = requestData.option;
        currentLanguage = requestData.language;

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("POST action successful.");
    });
}

function handlePutRequest(response)
{
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("PUT action was requested.");
}

function handleDeleteRequest(response)
{
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("DELETE action was requested.");
}

function handleBadRequest(response)
{
    console.log("Unsupported HTTP method requested.\n")
    response.writeHead(400, "Bad Request", { "Content-Type": "text/plain" });
    response.end("Bad request.");
}

exports.handleRequest = function (request, response)
{
    switch(request.method)
    {
        case "GET":
        handleGetRequest(response);
        break;
        case "POST":
        handlePostRequest(request, response);
        break;
        case "PUT":
        handlePutRequest(response);
        break;
        case "DELETE":
        handleDeleteRequest(response);
        break;
        default:
        handleBadRequest(response);
        break;
    }
    console.log("Request processing complete.\n");
}

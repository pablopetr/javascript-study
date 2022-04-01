var http = require("http");

http.createServer(function(req, res) {
    res.end("<h1>Welcome to my site!</h1>");
}).listen(8080);

console.log("My server is running!");
# HTPP

In this study, I learned to create a http server, importing http javascript module. To create a simple server with a hello, world response, we need to import http module and store in a variable. 
[```` var http = require("http"); ````](./app.js#L1)

Next, we need to create a server with http module.
[```` http.createServer().listen(8080); ````](./app.js#L3)
This block of code will create a http server listen in port 8080. Using 
````node app.js```` and acessing *localhost:8080* in our browser, we can access our webserver. The page will not load any information, because we are not using a response yet.

The line [```` http.createServer(function(req, res)) ````](./app.js#L3) will create a webserver passing a function to deal with requests and responses. The ````req ```` parameter is the request, and ````res```` is the response. We receive a request from web browser, and we can return a response to the client. ```` res.end(<h1>Hello, world!</h1>); ```` will return a response with a text as response, using html ````<h1>```` tag.

[```` console.log("My server is running"); ````](./app.js#L7) is a log to server. When we run this *app.js* in terminal, we are running javascript in nodejs, and the console.log will return in our server, not in web browser console.
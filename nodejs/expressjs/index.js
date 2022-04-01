const express = require("express");
const app = express();
const port = 8080;

app.get("/", function(req, res) {
    res.send("Welcome home!");
});

app.get("/contact", function(req, res) {
    res.send("Contact us!");
});

app.get("/about", function(req, res) {
    res.send("About us!");
});

app.get("/hello/:name", function(req, res) {
    res.send("Hello, "+parameter);
});

app.get('/bye/:name?', function(req, res) {
    if(req.params.name) {
        res.send("Bye, "+req.params.name);
        return;
    }

    res.send("Bye!");
});

app.get('/welcome', function(req, res) {
    query = req.query['name'];

    if(query) {
        res.send("Welcome, "+query);
    }

    res.send("Welcome!");
});

app.listen(port, function(error) {
    if(error) {
        console.log("An error was occurred!");
    } else {
        console.log("Server started succesfully!");
    }
});
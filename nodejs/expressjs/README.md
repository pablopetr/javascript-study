# Project
This project aim is about express framework.

### NPM
To start this project, I ran ```` npm init ```` to create our *package.json* and document my project libraries and init repository

```` npm instal express --save ```` create *node_modules* library and downloaded express and dependency libraries. This *--save* tag will save express in our package.json, and we will be able to download this project and install all packages required for this project running ```` npm instal ````
### Nodemon
This project is using *nodemon*. This package is responsible for restart the server when has any change in the code. To install this package we need to run ```` npm install nodemon -g ````. The *-g* flag will install nodemon globally, and you can use this nodemon in any project. To use this package, the command in terminal is ```` nodemon index.js ````

## Express

The first line is import express library from node_modules. Express is not a library, it's a framework, a set of libraries with a context to help us to solve some problems and with a proprosal. 

````const express = require("express")```` is importing this framework to our project. ```` const app = express ```` is creating and starting the express application, storing this application in ````app ````variable.

### Routes
Line 5 is creating a route. When you access http://localhost:8080 you are accessing the route "/", it's the first route. In this line, we are creating this route, to receive and return a response when the client access the "/" route. In line 7, we are sending a response with a text. If you access http://localhost:8080 you will se *Welcome home!* text. 

### Request
In line 17, I am declarating a route callled *hello* with a parameter requirement. I am defining this parameter as *name*. When you access https://localhost:8080/hello/your_name, this requisition in your web browser will send *your_name* as a parameter, and the application will receive in ````req ````attribute. Using ```` req.params.name ```` the server will be able to access this attribute.

In line 21, our server is receiving a parameter called *name*. In this case, we are using *?*. This *?* is making this parameter *name* optional. If you access https://localhost:8080/bye the web browser will show *Bye*, if you access https://localhost:8080/bye/john the web browser will show *Bye John* 

### Response
In line 18, after receive the parameter *name* the server is returning a response, using a string *Hello* and the request parameter *name*. We are able to receive multiple parameters through the route function request, and manipulate all of these in our business rules or response.


### Query Params
Query params are optional parameters passing through URL like this https://www.google.com/search?q=smile. In this case, we are acessing https://www.google.com in route *search* passing *smile* value to *q* parameter. In google search, *q* is a query param. You can concatenate many words in query params using *+* character. If you access this, you will see a yellow funny smile.
![alt text for screen readers](https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/2048px-Face-smile.svg.png)
If you access https://www.google.com/search?q=blue+smile you will se a funny **blue** smile. We are using two query parameters, blue, and smile, concatenated with *+*.
![alt text for screen readers](https://cdn5.vectorstock.com/i/1000x1000/17/24/blue-smile-vector-1341724.jpg)

In line 31, the application is getting query param called *name*. In line 33 is creating a condition of existence of *name* query param. If *name* exist, we use a custom message, saying *"Welcome, name"*.
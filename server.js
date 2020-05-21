var express = require('express');

var app = express();

app.get('/', function(request, response) {
    console.log(request);
    response.send("<h1 style='color:skyblue'>안녕하세요</h1>")
});
// listen(포트, url, baklog, callback)
app.listen(8080, function() {
    console.log("Server is starting at http://localhost:8080");
} );

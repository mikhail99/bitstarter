var express = require('express');
var app = express();
var fs = require('fs');


app.use(express.logger());

app.get('/', function(request, response) {
 

    var data = fs.readFileSync('index.html');

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

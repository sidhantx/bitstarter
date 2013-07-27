var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

var buffer = new Buffer(256);
buffer =fs.readFileSync("index.html","utf-8");
var str = buffer.toString();

response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

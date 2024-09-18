// Create web server
// Run on terminal: node comments.js
// Open browser and type: localhost:8080
// You will see the comments from the comments.json file

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  if (req.url === '/') {
    fs.createReadStream(__dirname + '/comments.json').pipe(res);
  } else if (req.url === '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    var obj = {
      firstname: 'John',
      lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404);
    res.end();
  }

}).listen(8080, '
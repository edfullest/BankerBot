var express = require('express');

var server = app.listen(process.env.PORT, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Web server started at http://%s:%s', host, port);
});

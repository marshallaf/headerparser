'use strict';

var express = require('express');
var app = express();

// set port
app.set('port', (process.env.PORT || 8080));

// otherwise, collect date and try to parse it
app.get('/', (req, res) => {
    const whoami = {};
    if (req.ip.startsWith('::ffff:')) {
        whoami.ipaddress = req.ip.slice(7);
    } else whoami.ipaddress = req.ip;
    res.send(whoami);
});

app.listen(app.get('port'), function () {
  console.log('App is running on port ' + app.get('port') + '!');
});
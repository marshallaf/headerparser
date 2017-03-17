'use strict';

var express = require('express');
var app = express();

// set port
app.set('port', (process.env.PORT || 8080));

app.get('/', (req, res) => {
    const whoami = {};
    if (req.ip.startsWith('::ffff:')) {
        whoami.ipaddress = req.ip.slice(7);
    } else whoami.ipaddress = req.ip;
    whoami.language = req.get('Accept-Language').split(',')[0];
    whoami.software = req.get('User-Agent').split(/[\(\)]/)[1];
    res.send(whoami);
});

app.listen(app.get('port'), function () {
  console.log('App is running on port ' + app.get('port') + '!');
});
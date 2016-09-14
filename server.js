var express = require('express');
//Create our app
var app = express();
//xec dinh thu muc de dat server la public
app.use(express.static('public'));
//start sever takes 2 argument:port and function when it done
app.listen(3000, function () {
    console.log('Express sever is up on port 3000');
});

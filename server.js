var express = require('express');
//Create our app
var app = express();
const PORT = process.env.PORT || 3000;
//xac dinh thu muc de dat server la public

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));
//start sever takes 2 argument:port and function when it done
app.listen(PORT, function() {
    console.log('Express sever is up on port ' + PORT);
});

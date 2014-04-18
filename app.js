var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

//Data Models
var orm = require('orm');
var Asset = require('./models/Asset.js');
var Locale = require('./models/Locale.js');
var Person = require('./models/Person.js');

//var mysqlUrl = "mysql://username:password@host/database";
var mysqlUrl = "mysql://b71bcfbc8362a6:98d136af@us-cdbr-east-05.cleardb.net/" +
                "heroku_504ba427da8966b?reconnect=true";

app.use(orm.express(mysqlUrl, {
  define: function (db, models, next) {
    models.locale = new Locale().define(db);
    models.person = new Person().define(db);
    models.asset = new Asset().define(db);
    next();
  }
}));

// all environments
app.use(express.favicon());
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.compress()); // gzip response data
app.use(express.methodOverride());
app.use(express.cookieParser("there is no secret"));
app.use(express.urlencoded());
app.use(express.json());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(express.errorHandler());

var server = http.createServer(app);
require('./routes')(app);

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

var orm    = require("orm");
var mysql  = require("mysql");
var Sync   = require("sql-ddl-sync").Sync;

//var mysqlUrl = "mysql://username:password@host/database";
var mysqlUrl = "mysql://b71bcfbc8362a6:98d136af@us-cdbr-east-05.cleardb.net/" +
                "heroku_504ba427da8966b?reconnect=true";

orm.connect(mysqlUrl, function (err, db) {
  //http://nodejsreactions.tumblr.com/post/64395522362/if-err-throw-err

  if (err) throw err;

  var driver = db.driver;

  var sync = new Sync({
    dialect: "mysql",
    driver: driver,
    debug: function (text) {
      console.log("> %s", text);
    }
  });

  sync.defineCollection("person", {
    firstName: String,
    lastName: String,
    age: Number
  });


  sync.sync(function (err) {
    if (err) {
      console.log("> Sync Error");
      console.log(err);
    } else {
      console.log("> Sync Done");
    }
    process.exit(0);
  });
});

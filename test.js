var orm    = require("orm");
var mysql  = require("mysql");
var Sync   = require("sql-ddl-sync").Sync;

orm.connect("mysql://b71bcfbc8362a6:98d136af@us-cdbr-east-05.cleardb.net/heroku_504ba427da8966b?reconnect=true", function (err, db) {
    if (err) throw err;
    var driver = db.driver;

    var sync = new Sync({
        dialect : "mysql",
        driver  : driver,
        debug   : function (text) {
            console.log("> %s", text);
        }
    });

    sync.defineCollection("ddl_sync_test", {
        id     : { type : "number", primary: true, serial: true },
        name   : { type : "text", required: true },
        age    : { type : "number", rational: true },
        male   : { type : "boolean" },
        born   : { type : "date", time: true },
        born2  : { type : "date" },
        int2   : { type : "number", size: 2 },
        int4   : { type : "number", size: 4 },
        int8   : { type : "number", size: 8 },
        float4 : { type : "number", rational: true, size: 4 },
        float8 : { type : "number", rational: true, size: 8 },
        type   : { type : "enum", values: [ 'dog', 'cat'], defaultValue: 'dog', required: true },
        photo  : { type : "binary" }
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

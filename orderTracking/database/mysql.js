var orm = require("orm");
orm.connect("mysql://username:password@host/database", function (err, db) {
    if (err) throw err;
    var dingdan = db.define("oilcard", {
        userPhone : Number,
        orderid   : Number,
        game_userid: Number,
        userid: Number,
        deviceid: Number,
        chargeType: Number,
        order_failed_reason: String,
        consumeMileages: Number,
        counts: Number,
        status: Number,
        createtime: String,
        couponid: Number
    });


    dingdan.find({ }, function (err, dingdan) {
        for (var value in dingdan[0]) {
            console.log(dingdan[0][value]);
        }
    });
});





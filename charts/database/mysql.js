var orm = require('orm');
var fs=require('fs');
var utility = require('utility');
var price_data = [];
var buy_data = [];

orm.connect("mysql://username:password@host/database", function (err, db) {
    if (err) throw err;

    var price = db.define("gold_price", {
        Date: Date,
        Open: Number,
        Close: Number,
        Low: Number,
        High: Number
    });

    var buy = db.define("gold_ann_index", {
        buyindex: Number,
        sellindex: Number
    });

    price.find({ }, function (err, price) {
        var price_a = [];
        for (var value in price) {
            // console.log(price[value].Open);
            var date = utility.YYYYMMDD(price[value].Date);
            price_a.push(date);
            price_a.push(price[value].Open);
            price_a.push(price[value].Close);
            price_a.push(price[value].Low);
            price_a.push(price[value].High);
            price_data.push(price_a);
            price_a = [];
        }

        fs.writeFile('price.json',JSON.stringify(price_data),function(err){
            if(err) throw err;
            // console.log('write price into JSON');
        });

    });
    buy.find({ }, function (err, buy) {
        var buy_a = [];
        for (var value in buy) {

            buy_a.push(buy[value].buyindex);
            buy_a.push(buy[value].sellindex);

            buy_data.push(buy_a);
            buy_a = [];
        }

        fs.writeFile('buy.json',JSON.stringify(buy_data),function(err){
            if(err) throw err;
            // console.log('write buy into JSON');
        });
    });
});




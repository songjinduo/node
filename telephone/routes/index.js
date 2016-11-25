var express = require('express');
var router = express.Router();
var xlsx = require("node-xlsx");
var fs = require('fs');
var http = require('http');
var qs = require('querystring');
var async = require('async');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

var list = xlsx.parse("table.xlsx");
//console.log(list);
var sheetData;
var newSheetData = [];

list.forEach(function (sheet) {
    //console.log(sheet.data);
    sheetData = sheet.data;
});

sheetData = sheetData.slice(0,20);

console.time('waterfall');
async.mapLimit(sheetData, 5, function (info, callback) {
    getplace(info, callback);
}, function (err, result) {
    console.log('final:');
    //console.log(result);
    console.log('sheet新数据: '+newSheetData);
    writeXls(newSheetData);
    console.timeEnd('waterfall');

});

function getplace(info, callback) {

    if (info[1] === "电话") {
        info.push("区域");
        newSheetData.push(info);
        callback(null, '区域');
    } else {
        var phone = info[1];
        async.waterfall([
            function ( done) {
                var data = {
                    phone: phone,
                    //phone: '18066595853',
                    key: '9d56d33ce2438e1c900f375808b7f82f'
                };//这是需要提交的数据
                var content = qs.stringify(data);
                //console.log(data);

                var post_options = {
                    host: 'apis.juhe.cn',
                    port: '80',
                    path: '/mobile/get?' + content,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/html',
                        'charset': 'utf-8'
                    }
                };
                //console.log("发送请求:");
                //console.log(post_options);

                //post_options = JSON.stringify(post_options);

                var post_req = http.request(post_options, function (response) {
                    var responseText = [];
                    var size = 0;
                    response.setEncoding('utf8');
                    response.on('data', function (data) {
                        //responseText.push(data);
                        //size += data.length;
                        //console.log("接口返回数据:" + data);
                        var data1 = JSON.parse(data);
                        var result = data1.result;
                        var place;
                        if (result === null) {
                            return "错误";
                        }
                        var province = '没有省份', city = '没有城市';
                        if (result.province !== null) {
                            province = result.province;
                        }
                        if (result.city !== null) {
                            city = result.city;
                        }
                        place = province + city;
                        console.log(place);
                        //return place;
                        done(null, place);
                    });
                    response.on('end', function () {
                        // Buffer 是node.js 自带的库，直接使用
                        //responseText = Buffer.concat(responseText, size);
                        //callback(responseText);
                        //return '测试返回成功';
                    });
                }).on('error', function (e) {
                    console.log("httpRequest Got error: " + e.message);
                    return "返回错误";
                });

                post_req.end();

                //return '测试返回成功22';
            },
            function (place, done) {
                info.push(place);
                newSheetData.push(info);
                callback(null, place);

                //setTimeout(function () {
                //    callback(null, place);
                //}, 100);

                done(null, place);
            }
        ], function (error, result) {
            //console.log(result);
        });
    }

}

function writeXls(datas) {
    var buffer = xlsx.build([
        {"name": "9.xls", "data": datas}
    ]);
    fs.writeFileSync("new.xlsx", buffer, 'binary');
}

module.exports = router;





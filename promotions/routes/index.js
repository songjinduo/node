var express = require('express');
var router = express.Router();
var fs = require('fs');
var formidable = require('formidable');
var shoper = require('../database/db').shoper;
var car = require('../database/db').car;


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/edit', function (req, res, next) {
    res.render('edit');
});

router.get('/success', function (req, res, next) {
    res.render('success');
});

router.get('/step2', function (req, res, next) {
    res.render('step2');
});

router.post('/step2', function (req, res, next) {
    var userInfo = {};
    var form = new formidable.IncomingForm();
    //设置临时文件存放的路径
    form.uploadDir = "./public/images";
    //设置上传数据的编码
    form.encoding = 'utf-8';
    //设置是否保持上传文件的拓展名
    form.keepExtensions = true;
    //文件上传过程中触发可以做上传进度查看

    form.on('field', function (name, value) {
        console.log(name + ":" + value);
        userInfo[name] = value;
    });

    //流程正常处理
    form.on('end', function () {
        console.log('上传成功');
        userInfo.creaateTime = new Date().format('yyyy-MM-dd hh:mm:ss');
        var shoperEntity = new shoper(userInfo);
        console.log("保存信息:");
        console.log(userInfo);
        shoperEntity.save();
    });
    //出错
    form.on('error', function (err) {
        res.end(err);
    });
    //执行文件上传任务
    form.parse(req, function () {

    });

    res.redirect('/step3');
});


router.get('/step3', function (req, res, next) {
    res.render('step3');
});

router.get('/step4', function (req, res, next) {
    res.render('step4');
});

router.get('/step4/:place', function (req, res, next) {
    var place = req.params.place;
    car.find({'place': place}).sort({'_id': -1}).limit(1).exec(function (err, text) {
        //console.log(persons);
        //查询到的所有person

        for (i in text) {
            console.log(text[i]);
            // console.log(text.text);
        }
        if (text.length == 0) {
            res.render('step4', {image: '/images/' + place + '.png', content: []});

        } else {
            res.render('step4', {image: '/images/' + place + '.png', content: text[0].text});

        }
    });
});


router.post('/edit', function (req, res, next) {
    var userInfo = {};

    var form = new formidable.IncomingForm();
    //设置临时文件存放的路径
    form.uploadDir = "./public/images";
    //设置上传数据的编码
    form.encoding = 'utf-8';
    //设置是否保持上传文件的拓展名
    form.keepExtensions = true;
    //文件上传过程中触发可以做上传进度查看

    var text = [];
    form.on('field', function (name, value) {
        // console.log(name + ":" + value);
        if (name === 'place') {
            userInfo[name] = value;
        } else if (name === 'title') {
            // console.log(name + ":" + value);
            text.push(value);
        } else if (value != null && value != '') {
            // console.log(name + ":" + value);
            text.push(name + value);
        }

    });

    //流程正常处理
    form.on('end', function () {
        console.log('上传成功');
        userInfo.text = text;
        userInfo.creaateTime = new Date().format('yyyy-MM-dd hh:mm:ss');
        var carEntity = new car(userInfo);
        console.log("保存信息:");
        console.log(userInfo);
        carEntity.save();
    });
    //出错
    form.on('error', function (err) {
        res.end(err);
    });
    //执行文件上传任务
    form.parse(req, function () {

    });

    res.redirect('/success');
});


router.get('/user', function (req, res, next) {

    shoper.find(function (err, persons) {
        //console.log(persons);
        //查询到的所有person
        for (i in persons) {
            console.log(persons[i]);
        }
        res.render('user', {aData: persons});
        //res.send(persons);
        //res.end();
    });

});

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),    //day
        "h+": this.getHours(),   //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};

module.exports = router;

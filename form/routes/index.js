var express = require('express');
var router = express.Router();
var fs = require('fs');
var formidable = require('formidable');
var shoper = require('../database/db').shoper;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

var userInfo = {};
router.post('/', function (req, res, next) {

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
        //shoperEntity.save();
    });
    //出错
    form.on('error', function (err) {
        res.end(err);
    });
    //执行文件上传任务
    form.parse(req, function () {

    });

    res.redirect('/car');
});



router.get('/car', function (req, res, next) {
    res.render('car');
});
router.post('/car', function (req, res, next) {

    var hobbyArray = [];

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
        hobbyArray.push(value);
    });

    //流程正常处理
    form.on('end', function () {
        console.log('上传成功');
        userInfo.creaateTime = new Date().format('yyyy-MM-dd hh:mm:ss');
        userInfo.hobby = hobbyArray;
        var shoperEntity = new shoper(userInfo);
        console.log("保存信息:");
        console.log(userInfo);
        //shoperEntity.save();
    });
    //出错
    form.on('error', function (err) {
        res.end(err);
    });
    //执行文件上传任务
    form.parse(req, function () {

    });

    res.redirect('/photo');
});


router.get('/photo', function (req, res, next) {
    res.render('photo');
});
router.post('/photo', function (req, res, next) {

    var imageArray = [];

    var form = new formidable.IncomingForm();
    //设置临时文件存放的路径
    form.uploadDir = "./public/images";
    //设置上传数据的编码
    form.encoding = 'utf-8';
    //设置是否保持上传文件的拓展名
    form.keepExtensions = true;
    //文件上传过程中触发可以做上传进度查看

    form.on('file', function (name, file) {
        if (file.name != '' && file.size != 0){
            imageArray.push(file.path);
            console.log(file.path)
        }else {
            fs.unlinkSync(file.path); // 如果空文件, 则删除
        }
    });



    //流程正常处理
    form.on('end', function () {
        console.log('上传成功');
        userInfo.creaateTime = new Date().format('yyyy-MM-dd hh:mm:ss');
        userInfo.images = imageArray;
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

    res.redirect('/finish');
});

router.get('/finish', function (req, res, next) {
    res.render('finish');
});

//日期格式化
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

router.get('/user', function (req, res, next) {

    shoper.find(function(err,persons){
        console.log(persons);
        //查询到的所有person
        for(i in persons){
            console.log(persons[i]);
        }
        res.render('user', {aData: persons});
        // res.send(persons);
        // res.end();
    });

});

module.exports = router;

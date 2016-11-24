var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var utils = require('utility');
var orm = require('orm');

var start = '2016-01-01';
var end = utils.YYYYMMDD();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {start: start, end: end});
});

router.post('/index', function (req, res, next) {

  var form = new formidable.IncomingForm();
  //设置临时文件存放的路径
  form.uploadDir = "./public/images";
  //设置上传数据的编码
  form.encoding = 'utf-8';
  //设置是否保持上传文件的拓展名
  form.keepExtensions = true;
  //文件上传过程中触发可以做上传进度查看

  var telephone;

  form.on('field', function (name, value) {
    // console.log(name + ":" + value);

    if (name === 'telephone') {
      telephone = value;
    }

    if (name === 'start') {
      start = value;
    }
    if (name === 'end') {
      end = value;
    }
  });

  //流程正常处理
  form.on('end', function () {
    console.log('上传成功');
    start = utils.YYYYMMDDHHmmss(start);
    end = utils.YYYYMMDDHHmmss(end);
    if (telephone) {
      req.models.dingdan.find({'userPhone': telephone, 'createtime': orm.between(start, end)}, function (err, dingdan) {
        start = start.slice(0, 10);
        end = end.slice(0, 10);
        if (dingdan.length == 0) {
          res.render('index', { title: '订单查询', dd: [], start: start, end: end, telephone:telephone});
        } else {
          // console.log('时间' + start);
          console.log(telephone);

          res.render('index', { title: '订单查询', dd: dingdan, start: start, end: end, telephone:telephone});
        }
      });
    } else {
      start = utils.YYYYMMDDHHmmss(start);
      end = utils.YYYYMMDDHHmmss(end);
      req.models.dingdan.find({'createtime': orm.between(start, end)}, function (err, dingdan) {
        start = start.slice(0, 10);
        end = end.slice(0, 10);
        if (dingdan.length == 0) {
          res.render('index', { title: '订单查询', dd: [], start: start, end: end, telephone:telephone});
        } else {
          res.render('index', { title: '订单查询', dd: dingdan, start: start, end: end, telephone:telephone});
        }
      });
    }
  });
  //出错
  form.on('error', function (err) {
    res.end(err);
  });
  //执行文件上传任务
  form.parse(req, function () {

  });
});

module.exports = router;

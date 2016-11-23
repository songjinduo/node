var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/promotions');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型

var shoperScheMa = new Schema({
    phone: String,
    creaateTime: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.shoper = db.model('shoper', shoperScheMa); //  与users集合关联

var carScheMa = new Schema({
    place: String,
    text: [String],
    creaateTime: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.car = db.model('car', carScheMa); //  与users集合关联


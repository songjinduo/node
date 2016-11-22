var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/form');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型

var activityScheMa = new Schema({
    images: [String],
    account: String,
    city: String,
    carNumber: String,
    hobby: [String],
    creaateTime: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.shoper = db.model('activity', activityScheMa); //  与users集合关联

